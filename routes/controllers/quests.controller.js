const bcrypt         = require("bcrypt");
const jwt            = require('jsonwebtoken');
const db             = require("../../database/models");
const Quests         = db.quests;
const Op             = db.Sequelize.Op;
const dotenv         = require('dotenv');
dotenv.config();

exports.findAll = async (req, res) => {
    try {
        Quests.findAll()
        .then(async data => {
            if(data) {
                res.send({
                    success : true,
                    data    : data,
                    message : null
                }); 
            } else {
                res.status(404).send({
                    success : false,
                    data    : null,
                    message : `User not found`
                });
            }
        })
    } catch (error) {
        res.status(500).send({
            success : false,
            data    : null,
            message : error
        });
    }
};

exports.get_specific_quests = async (req, res) => {
    try {
        Quests.findOne({
            where: {
                id: req.body.id,
            },
        })
        .then(async data => {
            if(data) {
                res.send({
                    success : true,
                    data    : data,
                    message : null
                }); 
            } else {
                res.status(404).send({
                    success : false,
                    data    : null,
                    message : `Prodi not found`
                });
            }
        })

    } catch (error) {
        res.status(500).send({
            success : false,
            data    : null,
            message : error
        });
    }
};