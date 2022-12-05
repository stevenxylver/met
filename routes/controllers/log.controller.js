const jwt       = require('jsonwebtoken');
const db        = require("../../database/models");
const LogLogin  = db.log_login;
const LogIjazah = db.log_ijazah;
const Op        = db.Sequelize.Op;
const dotenv    = require('dotenv');
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
                pt    : req.body.pt,
                prodi : req.body.prodi,
                nim   : req.body.nim,
            },
        });

        const dataIjazah = await LogIjazah.findAll({
            where: {
                pt    : req.body.pt,
                prodi : req.body.prodi,
                nim   : req.body.nim,
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