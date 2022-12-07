var express = require('express');
var router = express.Router();

const nina = require("./controllers/nina.controller.js");

router.post("/get_nina", nina.get_nina);
router.post("/get_selected_nina_dummy", nina.get_selected_nina_dummy);


module.exports = router;
