var express = require('express');
var router = express.Router();

const log = require("./controllers/log.controller.js");

router.post("/get-data-log", log.get_data_log);
router.post("/insert-log-ijazah", log.insert_log_ijazah);


module.exports = router;
