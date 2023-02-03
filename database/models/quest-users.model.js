module.exports = (sequelize, Sequelize) => {
    const QuestUser = sequelize.define("tbl_quest_users", {
        user_id: {
            type: Sequelize.INTEGER
        },
        quest_id: {
            type: Sequelize.INTEGER
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
    },
    {
        timestamps: false,
        sequelize,
        modelName: 'QuestUser',
        tableName: 'tbl_quest_users'
    });
  
    return QuestUser;
};