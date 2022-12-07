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
    }, {
        timestamps: false,
        sequelize,
        modelName: "Client",
        tableName: "tbl_clients",
    });
  
    return Client;
};