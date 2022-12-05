const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const db = require("../../database/models");
const Users = db.users;
const Client = db.client;
const Op = db.Sequelize.Op;

exports.login = async (req, res) => {
    const client_id = req.body.client_id;
    const client_secret = req.body.client_secret;
    const username = req.body.username;
    const password = req.body.password;

    try { 
        Client.findOne({
            where: {
                clientId: client_id,
                clientSecret: client_secret,
            }
        })
        .then(async dataClient => {
            if(dataClient) {
                Users.findOne({
                    where: { nim: username }
                })
                .then(async data => {
                    if(data) {
                        const hashedPassword = data.password
                        
                        if(await bcrypt.compare(password, hashedPassword)) {
                            
                            const token = jwt.sign(
                                {
                                    uid: data.uid,
                                    clientId: client_id,
                                    clientSecret: client_secret
                                },
                                process.env.TOKEN_SECRET,
                                {expiresIn: '7d'}
                            );
                            
                            res.send({
                                success: false,
                                data: data,
                                access_token: token,
                                message: null
                            });   
                        } else {
                            res.status(404).send({
                                success: false,
                                data: null,
                                message: `Wrong password!`
                            });
                        }
                    } else {
                        res.status(404).send({
                            success: false,
                            data: null,
                            message: `User not found`
                        });
                    }
                })
            } else {
                res.status(404).send({
                    success: false,
                    data: null,
                    message: `Client not found`
                });
            }
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            data: null,
            message: error
        });
    }
};

exports.findAll = async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) {
        res.status(401).send({
            success: false,
            data: null,
            message: `Unauthorized`
        });
    }

    try {
        
        jwt.verify(token, process.env.TOKEN_SECRET);

        Users.findAll()
        .then(async data => {
            if(data) {
                res.send({
                    success: false,
                    data: data,
                    message: null
                }); 
            } else {
                res.status(404).send({
                    success: false,
                    data: null,
                    message: `User not found`
                });
            }
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            data: null,
            message: error
        });
    }
};