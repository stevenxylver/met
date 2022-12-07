var express = require('express');
var router = express.Router();

const prodi = require("./controllers/prodi.controller.js");

router.post("/get_prodi", prodi.get_prodi);
router.post("/get_specific_prodi_dummy", prodi.get_specific_prodi_dummy);


module.exports = router;
