const bcrypt         = require("bcrypt");
const jwt            = require('jsonwebtoken');
const db             = require("../../database/models");
const Users          = db.users;
const QuestUsers     = db.quest_users;
const Quests         = db.quests;
const Op             = db.Sequelize.Op;
const dotenv         = require('dotenv');
dotenv.config();

exports.get_specific_quests = async (req, res) => {
    try {
        const users = await Users.findOne({
            where: {
                id: req.body.user_id,
            },
        });

        const questUsers = await QuestUsers.findAll({
            where: {
                user_id: req.body.user_id,
            },
            include: [{
                model: Quests
            }]
        });

        res.send({
            success : true,
            users: users,
            questUsers: questUsers,
            message : null
        });

    } catch (error) {
        res.status(500).send({
            success : false,
            data    : null,
            message : error
        });
    }
};

exports.complete_quests = async (req, res) => {
    try {
        const quests = await Quests.findOne({
            where: {
                id: req.body.quest_id,
            },
        });

        const questUsers = await QuestUsers.findOne({
            where: {
                quest_id: req.body.quest_id,
                user_id: req.body.user_id,
            },
        })
        .then(async data => {
            if (data) {
                const body = {
                  status: 'Complete',
                };
                return await data.update(body);
            }
        })

        const users = await Users.findOne({
            where: {
                id: req.body.user_id,
            },
        })
        .then(async data => {
            if (data) {
                const userToken = parseFloat(data.token);
                const rewardToken = parseFloat(quests.reward_token);
                const finalToken = userToken + rewardToken;

                const body = {
                  token: finalToken,
                };
                return await data.update(body);
            }
        });

        res.send({
            success : true,
            data: questUsers,
            message : "Quest complete"
        });

    } catch (error) {
        res.status(500).send({
            success : false,
            data    : null,
            message : error
        });
    }
};