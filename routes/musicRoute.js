const express = require("express");

const musicController = require("/Users/oscarsantana/LilPeepAPI/Controllers/musicController.js");

const fs = require("fs");

const songs = JSON.parse(
  fs.readFileSync("/Users/oscarsantana/LilPeepAPI/data.json")
);

const router = express.Router();

// router.param("id", musicController.checkId);

router.route("/").get(musicController.getAllSongs);

module.exports = router;
