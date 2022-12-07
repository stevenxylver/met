var express = require('express');
var router = express.Router();

const universitas = require("./controllers/universitas.controller.js");

router.get("/get_universitas_dummy", users.get_universitas_dummy);

module.exports = router;
