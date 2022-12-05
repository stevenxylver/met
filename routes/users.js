var express = require('express');
var router = express.Router();

const users = require("./controllers/users.controller.js");

router.get("/all", users.findAll);
router.post("/login", users.login);


module.exports = router;
