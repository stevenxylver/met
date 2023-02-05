var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const db = require("../database/models");
const AvatarDummy    = db.avatar_dummy;
const MahasiswaDummy = db.mahasiswa_dummy;
const Users          = db.users;

var jsonParser = bodyParser.json();

function generateAccessToken(users) {
  return jwt.sign(users, process.env.TOKEN_SECRET, { expiresIn: "7d" });
}

router.post("/", jsonParser, function (req, res, next) {
  const token = generateAccessToken(req.body.users);
  res.json({
    jwt: token,
  });
});

router.post("/verify-jwt", jsonParser, function (req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  try {
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    res.json({
      success: true,
      data: decode,
      message: null,
    });
  } catch (error) {
    res.json({
      success: false,
      data: null,
      message: error,
    });
  }
});

router.post("/did-attribute", jsonParser, async function (req, res, next) {
  // const authHeader = req.headers["authorization"];
  // const token = authHeader && authHeader.split(" ")[1];

  // if (token == null) return res.sendStatus(401);

  const avatar = await AvatarDummy.findOne({
    where: {
      user_id: req.body.data.user_id,
    },
  });

  const users = await Users.findOne({
    where: {
      id: req.body.data.user_id,
    }
  });

  const mahasiswaDummy = await MahasiswaDummy.findOne({
    where: {
      nim: users.nim,
    }
  });

  if (avatar) {
    try {
      // const decode = jwt.verify(token, process.env.TOKEN_SECRET);
      res.json({
        success: true,
        data: avatar,
        users: users,
        mahasiswa: mahasiswaDummy,
        message: null,
      });
    } catch (error) {
      res.json({
        success: false,
        data: null,
        message: error,
      });
    }
  } else {
    res.json({
      success: false,
      data: null,
      message: error,
    });
  }
});

module.exports = router;
