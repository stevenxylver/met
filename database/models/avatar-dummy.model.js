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
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
    });
  
    return AvatarDummy;
};