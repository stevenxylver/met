module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "aryosengkuni",
    DB: "db_portal_metavers",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };