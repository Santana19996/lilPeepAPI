const fs = require("fs");

const songs = JSON.parse(
  fs.readFileSync(`/Users/oscarsantana/LilPeepAPI/data.json`)
);

exports.checkId = (req, res, next, val) => {
  if (req.params.id * 1 > songs.length) {
    return res.status(404).json({
      status: "fail MF",
      message: "Invalid Id",
    });
  }
  next();
};

exports.getAllSongs = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: "Success ",
    requestedAt: req.requestTime,
    results: songs.length,
    data: {
      songs,
    },
  });
};

exports.getAllSongNames = (req, res) => {
  const songNames = songs.map((song) => song.name);
  res.status(200).json({
    status: "Success",
    data: {
      songNames: songNames,
    },
  });
};

exports.getSong = (req, res) => {
  const id = req.params.id;
  const song = songs.find((song) => song._id === id);
  console.log(song); // Undefined?TF

  res.status(200).json({
    status: "Success here is the song you are looking for!",
    data: {
      song: song,
    },
  });
};

exports.getAllImages = (req, res) => {
  const images = songs.find((song) => song.img);
  res.status(200).json({
    status: "Success here is the images",
    data: images,
  });
};
