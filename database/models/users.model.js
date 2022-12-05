module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("tbl_users", {
        uid: {
            type: Sequelize.TEXT
        },
        id_reg_pd: {
            type: Sequelize.TEXT
        },
        did: {
            type: Sequelize.TEXT
        },
        user: {
            type: Sequelize.TEXT
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
        password: {
            type: Sequelize.TEXT
        },
        status: {
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
    });
  
    return Users;
};