const bcrypt           = require("bcrypt");
const jwt              = require('jsonwebtoken');
const db               = require("../../database/models");
const UniversitasDummy = db.universitas_dummy;
const Op               = db.Sequelize.Op;
const dotenv           = require('dotenv');
dotenv.config();

exports.get_universitas_dummy = async (req, res) => {

    try {
        const list_universitas = await UniversitasDummy.findAll({});

        res.status(200).json({
            success: true,
            message: "Sukses",
            data: list_universitas,
        });
    } catch (error) {
        res.status(500).send({
            success : false,
            data    : null,
            message : error
        });
    }
};