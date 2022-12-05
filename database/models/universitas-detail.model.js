module.exports = (sequelize, Sequelize) => {
    const UniversitasDetail = sequelize.define("tbl_universitas_detail", {
        id_univ: {
            type: Sequelize.STRING
        },
        sk_pendirian: {
            type: Sequelize.STRING
        },
        tgl_sk_pendirian: {
            type: Sequelize.STRING
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
            type: Sequelize.TEXT
        },
        negara: {
            type: Sequelize.TEXT
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
        modelName: 'UniversitasDetail',
        tableName: 'tbl_universitas_detail'
    });
  
    return UniversitasDetail;
};