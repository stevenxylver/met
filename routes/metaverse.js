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

/* GET users listing. */
router.post('/verify-jwt', jsonParser, function(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    res.json({
        "decode": decode
    })
});

module.exports = router;
