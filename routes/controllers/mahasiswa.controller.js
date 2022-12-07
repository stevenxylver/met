const jwt              = require('jsonwebtoken');
const db               = require("../../database/models");
const Mahasiswa        = db.mahasiswa;
const MahasiswaDummy   = db.mahasiswa_dummy;
const UniversitasDummy = db.universitas_dummy;
const ProdiDummy       = db.prodi_dummy;
const User             = db.users;
const LogLogin         = db.log_login;
const Op               = db.Sequelize.Op;
const { v4: uuid }     = require('uuid');
const dotenv           = require('dotenv');
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

exports.insert_user = async (req, res) => {
    const create_unique_id = uuid();
    const unique_id        = uuid();
    const moment           = require("moment");
    const now              = moment();

    try {
        const cek = await User.findOne({
            where: {
                pt: req.body.pt,
                prodi: req.body.prodi,
                nim: req.body.nim,
            },
        }).then(async function(obj) {
            if(obj) {
                
                const log = await LogLogin.create({
                    uid            : create_unique_id,
                    id_reg_pd      : req.body.id_reg_pd,
                    user_login     : obj.uid,
                    pt             : req.body.pt,
                    prodi          : req.body.prodi,
                    nim            : req.body.nim,
                    tgl_login      : now.format("YYYY-MM-DD HH:mm"),
                    wallet_address : req.body.wallet
                });

                res.status(200).json({
                    success : true,
                    login   : log.uid,
                    message : "Success",
                });
            } else {
                const createUser = await User.create({
                    uid            : create_unique_id,
                    id_reg_pd      : req.body.id_reg_pd,
                    did            : req.body.did,
                    user           : 'Mahasiswa',
                    pt             : req.body.pt,
                    prodi          : req.body.prodi,
                    nim            : req.body.nim,
                    status         : 'Aktif',
                    wallet_address : req.body.wallet
                });

                const log = await LogLogin.create({
                    uid            : unique_id,
                    id_reg_pd      : req.body.id_reg_pd,
                    user_login     : createUser.uid,
                    pt             : req.body.pt,
                    prodi          : req.body.prodi,
                    nim            : req.body.nim,
                    tgl_login      : now.format("YYYY-MM-DD HH:mm"),
                    wallet_address : req.body.wallet
                });
        
                if(createUser) {
                    res.status(200).json({
                        success : true,
                        login   : log.uid,
                        message : "Success",
                    });
                } else {
                    res.status(500).send({
                        success : false,
                        data    : null,
                        message : 'error'
                    });
                }   
            }
        });
    } catch (error) {
        res.status(500).send({
            success : false,
            data    : null,
            message : error
        });
    }

};

exports.get_specific_mahasiswa_dummy = async (req, res) => {
    try {
        const dataExisting = await User.findAll({
            where: {
                nim: req.body.nim,
            },
        });
      
        if (dataExisting.length > 0) {
            return res.status(200).json({
              success: false,
              message: "Akun Sudah Ada!",
            });
        }
      
        const walletExisting = await User.findAll({
            where: {
                wallet_address: req.body.wallet,
            },
        });
      
        if (walletExisting.length > 0) {
            return res.status(200).json({
                success: false,
                message: "Wallet Address Sudah Dipakai!",
            });
        }
      
        const universitas = await UniversitasDummy.findAll({
            where: {
                id: req.body.id_univ,
            },
        });
        
        const nama_universitas = universitas[0].nama;
        
        const prodi = await ProdiDummy.findAll({
            where: {
                id: req.body.id_prodi,
            },
        });
          
        const nama_prodi = prodi[0].nama_prodi;
        
        const mahasiswa = await MahasiswaDummy.findAll({
            where: {
                nim: req.body.nim,
                universitas: nama_universitas,
                programStudi: nama_prodi,
            },
        });
      
        if (mahasiswa.length > 0) {
            return res.status(200).json({
                success: true,
                message: "Sukses",
                data: mahasiswa[0],
            });
        } else {
            return res.status(200).json({
                success: false,
                message: "Data Mahasiswa Tidak Ditemukan!",
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

exports.post_mahasiswa = async (req, res) => {
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
        
        const createMahasiswaSet  = await Mahasiswa.create({
            id           : req.body.id,
            nama         : req.body.nama,
            nik          : req.body.nik,
            nim          : req.body.nim,
            tempatLahir  : req.body.tempatLahir,
            universitas  : req.body.universitas,
            programStudi : req.body.programStudi,
            semester     : req.body.semester,
            noTelp       : req.body.noTelp,
            status       : "active",
            created_at   : now(),
            updated_at   : now(),
        });

        if(createMahasiswaSet) {
            res.status(200).json({
                success: true,
                message: "Success",
            });
        } else {
            res.status(200).json({
                success: false,
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