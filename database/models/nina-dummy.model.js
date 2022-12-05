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
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
    });
  
    return NinaDummy;
};