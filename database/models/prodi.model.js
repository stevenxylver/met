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
        modelName: 'Prodi',
        tableName: 'tbl_prodi'
    });
  
    return Prodi;
};