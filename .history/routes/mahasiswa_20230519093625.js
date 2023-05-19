var express = require("express");
var router = express.Router();

const mahasiswa = require("./controllers/mahasiswa.controller.js");

router.post("/get_mahasiswa", mahasiswa.get_mahasiswa);
router.post("/insert-user", mahasiswa.insert_user);
router.post(
  "/get_specific_mahasiswa_dummy",
  mahasiswa.get_specific_mahasiswa_dummy
);
router.post("/post_mahasiswa", mahasiswa.post_mahasiswa);

module.exports = router;
