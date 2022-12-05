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
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
    });
  
    return ProdiDummy;
};