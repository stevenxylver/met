module.exports = (sequelize, Sequelize) => {
    const AvatarDummy = sequelize.define("tbl_avatar_dummy", {
        user_id: {
            type: Sequelize.INTEGER
        },
        nama_avatar: {
            type: Sequelize.STRING
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
    }, {
        timestamps: false,
        sequelize,
        modelName: "AvatarDummy",
        tableName: "tbl_avatar_dummy",
    });
  
    return AvatarDummy;
};