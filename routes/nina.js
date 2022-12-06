var express = require('express');
var router = express.Router();

const nina = require("./controllers/nina.controller.js");

router.post("/get_nina", nina.get_nina);


module.exports = router;
