module.exports = (sequelize, Sequelize) => {
    const ProdiDummy = sequelize.define("tbl_prodi_dummy", {
        id_univ: {
            type: Sequelize.INTEGER
        },
        nama_univ: {
            type: Sequelize.STRING
        },
        kode_prodi: {
            type: Sequelize.STRING
        },
        nama_prodi: {
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
      modelName: "ProdiDummy",
      tableName: "tbl_prodi_dummy",
    });
  
    return ProdiDummy;
};