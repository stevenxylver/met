module.exports = (sequelize, Sequelize) => {
    const KhsStudyDummy = sequelize.define("tbl_khs_studi_dummy", {
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
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
    });
  
    return KhsStudyDummy;
};