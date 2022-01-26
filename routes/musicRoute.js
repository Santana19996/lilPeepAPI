const express = require("express");

const musicController = require("/Users/oscarsantana/LilPeepAPI/Controllers/musicController.js");

const fs = require("fs");

const songs = JSON.parse(
  fs.readFileSync("/Users/oscarsantana/LilPeepAPI/data.json")
);

const router = express.Router();

router.route("/").get(musicController.getAllSongs);

router.route("/names").get(musicController.getAllSongNames);

router.route("/:id").get(musicController.getSong);

router.route("/images").get(musicController.getAllImages);

module.exports = router;
