var express = require('express');
var router = express.Router();

const mahasiswa = require("./controllers/mahasiswa.controller.js");

router.post("/get_mahasiswa", mahasiswa.get_mahasiswa);


module.exports = router;
