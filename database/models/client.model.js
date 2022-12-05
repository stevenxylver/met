module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("tbl_clients", {
        name: {
            type: Sequelize.STRING
        },
        clientId: {
            type: Sequelize.TEXT
        },
        clientSecret: {
            type: Sequelize.TEXT
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
    });
  
    return Client;
};