var express = require('express');
var router = express.Router();

const avatar = require("./controllers/avatar.controller.js");

router.get("/get_avatar_dummy", avatar.get_avatar_dummy);
router.post("/get_user_avatar_dummy", avatar.get_user_avatar_dummy);
router.post("/save_avatar_dummy", avatar.save_avatar_dummy);


module.exports = router;
