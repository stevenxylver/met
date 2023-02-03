var express = require('express');
var router = express.Router();

const quests = require("./controllers/quests.controller.js");
const quest_users = require("./controllers/quest_users.controller.js");

router.get("/all", quests.findAll);
router.post("/get_specific_quests", quests.get_specific_quests);
router.post("/users", quest_users.get_specific_quests);
router.post("/complete-quests", quest_users.complete_quests);

module.exports = router;