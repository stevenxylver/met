var express = require('express');
var router = express.Router();

const khs = require("./controllers/khs.controller.js");

router.post("/get_selected_khs_studi_dummy", khs.get_selected_khs_studi_dummy);


module.exports = router;
