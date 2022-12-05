const jwt       = require('jsonwebtoken');
const db        = require("../../database/models");
const Mahasiswa = db.mahasiswa;
const Op        = db.Sequelize.Op;
const dotenv    = require('dotenv');
dotenv.config();

exports.get_mahasiswa = async (req, res) => {
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

        Mahasiswa.findAll()
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
                    message : `Mahasiswa not found`
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