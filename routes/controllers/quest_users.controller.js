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