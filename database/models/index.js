const dbConfig = require("../db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
db.avatar_dummy = require("./avatar-dummy.model.js")(sequelize, Sequelize);
db.khs_studi_dummy = require("./khs-studi-dummy.model.js")(sequelize, Sequelize);
db.log_ijazah = require("./log-ijazah.model.js")(sequelize, Sequelize);
db.log_login = require("./log-login.model.js")(sequelize, Sequelize);
db.mahasiswa_dummy = require("./mahasiswa-dummy.model.js")(sequelize, Sequelize);
db.mahasiswa = require("./mahasiswa.model.js")(sequelize, Sequelize);
db.nina_dummy = require("./nina-dummy.model.js")(sequelize, Sequelize);
db.prodi_dummy = require("./prodi-dummy.model.js")(sequelize, Sequelize);
db.prodi = require("./prodi.model.js")(sequelize, Sequelize);
db.universitas_detail = require("./universitas-detail.model.js")(sequelize, Sequelize);
db.universitas_dummy = require("./universitas-dummy.model.js")(sequelize, Sequelize);
db.universitas = require("./universitas.model.js")(sequelize, Sequelize);
db.client = require("./client.model.js")(sequelize, Sequelize);
db.quests = require("./quests.model.js")(sequelize, Sequelize);

module.exports = db;