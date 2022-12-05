module.exports = (sequelize, Sequelize) => {
    const UniversitasDummy = sequelize.define("tbl_universitas_dummy", {
        kode: {
            type: Sequelize.STRING
        },
        kode_satker: {
            type: Sequelize.STRING
        },
        nama: {
            type: Sequelize.STRING
        },
        nama_singkat: {
            type: Sequelize.STRING
        },
        bentuk_pendidikan: {
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
      modelName: "UniversitasDummy",
      tableName: "tbl_universitas_dummy",
    });
  
    return UniversitasDummy;
};