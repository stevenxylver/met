const jwt         = require('jsonwebtoken');
const db          = require("../../database/models");
const AvatarDummy = db.avatar_dummy;
const Op          = db.Sequelize.Op;
const dotenv      = require('dotenv');
const moment      = require("moment");
const now         = moment();
dotenv.config();

exports.get_avatar_dummy = async (req, res) => {
    const authHeader = req.headers['authorization']
    const token      = authHeader && authHeader.split(' ')[1]

    if (token == null) {
        res.status(401).send({
            success : false,
            data    : null,
            message : `Unauthorized`
        });
    }

    try {
        jwt.verify(token, process.env.TOKEN_SECRET);

        AvatarDummy.findAll()
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
                    message : `Avatar not found`
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

exports.get_user_avatar_dummy = async (req, res) => {
    const authHeader = req.headers['authorization']
    const token      = authHeader && authHeader.split(' ')[1]

    if (token == null) {
        res.status(401).send({
            success : false,
            data    : null,
            message : `Unauthorized`
        });
    }

    try {
        jwt.verify(token, process.env.TOKEN_SECRET);

        AvatarDummy.findOne({
            where: {
              user_id: req.body.id,
            },
        })
        .then(async data => {
            if(data) {
                res.send({
                    success : true,
                    data    : data,
                    message : null,
                    token: token
                }); 
            } else {
                res.status(404).send({
                    success : false,
                    data    : null,
                    message : `Avatar not found`
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

exports.save_avatar_dummy = async (req, res) => {
    const authHeader = req.headers['authorization']
    const token      = authHeader && authHeader.split(' ')[1]

    if (token == null) {
        res.status(401).send({
            success : false,
            data    : null,
            message : `Unauthorized`
        });
    }

    try {
        jwt.verify(token, process.env.TOKEN_SECRET);

        const avatar = AvatarDummy.findOne({
            where: {
              user_id: req.body.id,
            },
        })
        .then(async data => {
            if (data) {
                const body = {
                  nama_avatar: req.body.namaAvatar,
                  updated_at: now.format("YYYY-MM-DD HH:mm"),
                };
                return await data.update(body);
            } else {
                return await AvatarDummy.create({
                    user_id: req.body.id,
                    nama_avatar: req.body.namaAvatar,
                    status: "Online",
                    created_at: now.format("YYYY-MM-DD HH:mm"),
                    updated_at: now.format("YYYY-MM-DD HH:mm"),
                });
            }
        });

        if (avatar) {
            res.send({
                success: true,
                data: avatar,
                message: "Berhasil Mengupdate Avatar",
            });
          } else {
            res.send({
                success: false,
                data: null,
                message: "Terjadi Kesalahan saat membaca Avatar!",
            });
          }
    } catch (error) {
        res.status(500).send({
            success : false,
            data    : null,
            message : error
        });
    }
};