var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

const Crypto = require('crypto');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

var jsonParser = bodyParser.json()

function generateAccessToken(tokenUri) {
    return jwt.sign(tokenUri, process.env.TOKEN_SECRET, { expiresIn: '7d' });
}

/* GET users listing. */
router.get('/', jsonParser, function(req, res, next) {
    const token = generateAccessToken({ tokenUri:res.token_uri });
    const token1 = Crypto.createHmac('sha256', 'a secret').update('data').digest('hex');
    res.json({
        "HMAC TOKEN":token1,
        "jwt": token,
        
    })

    console.log(token); 
});

module.exports = router;
