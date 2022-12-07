module.exports = (sequelize, Sequelize) => {
    const LogLogin = sequelize.define("tbl_log_login", {
        uid: {
            type: Sequelize.TEXT
        },
        id_reg_pd: {
            type: Sequelize.TEXT
        },
        user_login: {
            type: Sequelize.DATE
        },
        pt: {
            type: Sequelize.TEXT
        },
        prodi: {
            type: Sequelize.TEXT
        },
        nim: {
            type: Sequelize.TEXT
        },
        tgl_login: {
            type: Sequelize.TEXT
        },
        tgl_logout: {
            type: Sequelize.TEXT
        },
        wallet_address: {
            type: Sequelize.TEXT
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
    },
    {
        timestamps: false,
        sequelize,
        modelName: 'LogLogin',
        tableName: 'tbl_log_login'
    });
  
    return LogLogin;
};