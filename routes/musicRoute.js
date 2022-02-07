const express = require("express");

const musicController = require("../Controllers/musicController");

const router = express.Router();

router.route("/images").get(musicController.getImages);

router
  .route("/")
  .get(musicController.getAllSongs)
  .post(musicController.createSong);

// router.route("/names").get(musicController.getAllSongNames);

// router.route("/:id").get(musicController.getSong);

// router.route("/images").get(musicController.getAllImages);

module.exports = router;
