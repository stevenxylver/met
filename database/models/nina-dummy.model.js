module.exports = (sequelize, Sequelize) => {
    const NinaDummy = sequelize.define("tbl_nina_dummy", {
        id_req_pd: {
            type: Sequelize.INTEGER
        },
        no_ijazah: {
            type: Sequelize.STRING
        },
        tanggal_lulus: {
            type: Sequelize.STRING
        },
        total_sks: {
            type: Sequelize.STRING
        },
        ipk_lulus: {
            type: Sequelize.STRING
        },
        gelar: {
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
      modelName: "NinaDummy",
      tableName: "tbl_nina_dummy",
    });
  
    return NinaDummy;
};