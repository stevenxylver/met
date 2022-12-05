module.exports = (sequelize, Sequelize) => {
    const KHSStudiDummy = sequelize.define("tbl_khs_studi_dummy", {
        id_reg_pd: {
            type: Sequelize.INTEGER
        },
        kode_semester: {
            type: Sequelize.STRING
        },
        kode_mata_kuliah: {
            type: Sequelize.STRING
        },
        mata_kuliah: {
            type: Sequelize.STRING
        },
        sks: {
            type: Sequelize.STRING
        },
        nilai_huruf: {
            type: Sequelize.STRING
        },
        nilai_transfer: {
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
      modelName: "KHSStudiDummy",
      tableName: "tbl_khs_studi_dummy",
    });
  
    return KHSStudiDummy;
};