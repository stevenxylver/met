var express = require("express");
var router = express.Router();

const mahasiswa = require("./controllers/mahasiswa.controller.js");

post("/get_mahasiswa", mahasiswa.get_mahasiswa);
post("/insert-user", mahasiswa.insert_user);
post("/get_specific_mahasiswa_dummy", mahasiswa.get_specific_mahasiswa_dummy);
post("/post_mahasiswa", mahasiswa.post_mahasiswa);

module.exports = router;
