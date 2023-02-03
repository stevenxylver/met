module.exports = (sequelize, Sequelize) => {
    const Quest = sequelize.define("tbl_quests", {
        name: {
            type: Sequelize.TEXT
        },
        description: {
            type: Sequelize.TEXT
        },
        step: {
            type: Sequelize.TEXT
        },
        reward_token: {
            type: Sequelize.STRING
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
        modelName: 'Quest',
        tableName: 'tbl_quests'
    });
  
    return Quest;
};