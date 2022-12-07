var express = require('express');
var router = express.Router();

const users = require("./controllers/users.controller.js");

router.get("/all", users.findAll);
router.post("/login", users.login);
router.post("/login-wallet", users.login_wallet);
router.post("/login-wallet-next", users.login_wallet_next);


module.exports = router;
