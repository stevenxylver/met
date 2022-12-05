module.exports = (sequelize, Sequelize) => {
    const Prodi = sequelize.define("tbl_prodi", {
        id_univ: {
            type: Sequelize.STRING
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
  
    return Prodi;
};