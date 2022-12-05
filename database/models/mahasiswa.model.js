module.exports = (sequelize, Sequelize) => {
    const Mahasiswa = sequelize.define("tbl_mahasiswa", {
        nama: {
            type: Sequelize.STRING
        },
        nik: {
            type: Sequelize.STRING
        },
        nim: {
            type: Sequelize.STRING
        },
        tempatLahir: {
            type: Sequelize.STRING
        },
        tanggalLahir: {
            type: Sequelize.STRING
        },
        universitas: {
            type: Sequelize.STRING
        },
        programStudi: {
            type: Sequelize.STRING
        },
        semester: {
            type: Sequelize.TEXT
        },
        noTelp: {
            type: Sequelize.TEXT
        },
        status: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
    });
  
    return Mahasiswa;
};