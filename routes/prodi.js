var express = require('express');
var router = express.Router();

const prodi = require("./controllers/prodi.controller.js");

router.post("/get_prodi", prodi.get_prodi);


module.exports = router;
