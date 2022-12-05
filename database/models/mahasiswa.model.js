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
        created_at: {
            type: Sequelize.DATE
        },
        updated_at: {
            type: Sequelize.DATE
        },
    },
    {
        timestamps: false,
        sequelize,
        modelName: 'Mahasiswa',
        tableName: 'tbl_mahasiswa'
    });
  
    return Mahasiswa;
};