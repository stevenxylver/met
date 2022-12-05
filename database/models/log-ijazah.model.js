module.exports = (sequelize, Sequelize) => {
    const LogIjazah = sequelize.define("tbl_log_ijazah", {
        uid: {
            type: Sequelize.TEXT
        },
        id_reg_pd: {
            type: Sequelize.TEXT
        },
        tanggal: {
            type: Sequelize.DATE
        },
        wallet: {
            type: Sequelize.TEXT
        },
        tx_hash: {
            type: Sequelize.TEXT
        },
        status: {
            type: Sequelize.TEXT
        },
        description: {
            type: Sequelize.TEXT
        },
        pt: {
            type: Sequelize.TEXT
        },
        prodi: {
            type: Sequelize.TEXT
        },
        nim: {
            type: Sequelize.TEXT
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        },
    });
  
    return LogIjazah;
};