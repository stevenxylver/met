module.exports = (sequelize, Sequelize) => {
    const Universitas = sequelize.define("tbl_universitas", {
        kode: {
            type: Sequelize.STRING
        },
        kode_satker: {
            type: Sequelize.STRING
        },
        nama: {
            type: Sequelize.STRING
        },
        nama_singkat: {
            type: Sequelize.STRING
        },
        bentuk_pendidikan: {
            type: Sequelize.STRING
        },
        sk_pendirian: {
            type: Sequelize.STRING
        },
        tgl_sk_pendirian: {
            type: Sequelize.DATE
        },
        alamat: {
            type: Sequelize.STRING
        },
        propinsi: {
            type: Sequelize.STRING
        },
        telepon: {
            type: Sequelize.STRING
        },
        faksimile: {
            type: Sequelize.STRING
        },
        website: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        negara: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
    });
  
    return Universitas;
};