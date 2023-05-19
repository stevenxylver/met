module.exports = (sequelize, Sequelize) => {
  const DosenDummy = sequelize.define(
    "tbl_dosen_dummy",
    {
      nama: {
        type: Sequelize.STRING,
      },
      nik: {
        type: Sequelize.STRING,
      },
      nid: {
        type: Sequelize.STRING,
      },
      jenisKelamin: {
        type: Sequelize.STRING,
      },
      tempatLahir: {
        type: Sequelize.STRING,
      },
      tanggalLahir: {
        type: Sequelize.STRING,
      },
      universitas: {
        type: Sequelize.STRING,
      },
      programStudi: {
        type: Sequelize.STRING,
      },
      semester: {
        type: Sequelize.TEXT,
      },
      noTelp: {
        type: Sequelize.TEXT,
      },
      status: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: false,
      sequelize,
      modelName: "DosenDummy",
      tableName: "tbl_dosen_dummy",
    }
  );

  return MahasiswaDummy;
};
