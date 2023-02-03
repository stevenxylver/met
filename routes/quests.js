var express = require('express');
var router = express.Router();

const quests = require("./controllers/quests.controller.js");

router.get("/all", quests.findAll);
router.post("/get_specific_quests", quests.get_specific_quests);

module.exports = router;