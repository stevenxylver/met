var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

var jsonParser = bodyParser.json()

function generateAccessToken(tokenUri) {
    return jwt.sign(tokenUri, process.env.TOKEN_SECRET, { expiresIn: '7d' });
}

/* GET users listing. */
router.post('/', jsonParser, function(req, res, next) {
    const token = generateAccessToken({ tokenUri: req.body.token_uri });
    res.json({
        "jwt": token
    })
});

module.exports = router;
