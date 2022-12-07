const jwt          = require('jsonwebtoken');
const db           = require("../../database/models");
const LogLogin     = db.log_login;
const LogIjazah    = db.log_ijazah;
const Op           = db.Sequelize.Op;
const { v4: uuid } = require('uuid');
const moment       = require("moment");
const now          = moment();
const dotenv       = require('dotenv');
dotenv.config();

exports.get_data_log = async (req, res) => {
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

        const dataLogin = await LogLogin.findAll({
            where: {
                pt    : req.body.pt || null,
                prodi : req.body.prodi || null,
                nim   : req.body.nim || null,
            },
        });

        const dataIjazah = await LogIjazah.findAll({
            where: {
                pt    : req.body.pt || null,
                prodi : req.body.prodi || null,
                nim   : req.body.nim || null,
            },
        });

        res.send({
            success : true,
            loginData: dataLogin,
            ijazahData: dataIjazah,
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

exports.insert_log_ijazah = async (req, res) => {
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

        const createLog  = await LogIjazah.create({
            uid         : unique_id,
            id_reg_pd   : req.body.id_reg_pd,
            tanggal     : now.format("YYYY-MM-DD HH:mm"),
            wallet      : req.body.wallet,
            tx_hash     : req.body.tx_hash,
            status      : req.body.status,
            description : req.body.description,
            pt          : req.body.pt,
            prodi       : req.body.prodi,
            nim         : req.body.nim,
            createdAt   : now.format("YYYY-MM-DD HH:mm"),
            updatedAt   : now.format("YYYY-MM-DD HH:mm")
        });

        if(createLog) {
            res.send({
                success : true,
                data: createLog,
                message : null
            });
        } else {
            res.status(200).json({
                success: false,
                data: null,
                message: "Error",
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