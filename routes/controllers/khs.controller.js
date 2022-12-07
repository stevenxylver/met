const jwt           = require('jsonwebtoken');
const db            = require("../../database/models");
const KHSStudiDummy = db.khs_studi_dummy;
const Op            = db.Sequelize.Op;
const dotenv        = require('dotenv');
dotenv.config();

exports.get_selected_khs_studi_dummy = async (req, res) => {
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

        KHSStudiDummy.findOne({
            where: {
              id_reg_pd     : req.body.id_reg_pd || null,
              kode_semester : req.body.kode_semester || null,
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
                    message : `KHS not found`
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