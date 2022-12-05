module.exports = (sequelize, Sequelize) => {
    const UniversitasDummy = sequelize.define("tbl_universitas_dummy", {
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
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
    });
  
    return UniversitasDummy;
};