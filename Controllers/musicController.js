const Song = require("../modules/musicModule");
const APIFeatures = require("../utils/apiFeatures.js");

exports.aliasImages = (req, res, next) => {
  // req.query = Song.find().toArray();
  console.log(Song.findById(1));
  next();
};

exports.getImages = async (req, res) => {
  try {
    const features = new APIFeatures(Song.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const songs = await features.query;

    const images = songs.map((song) => ({ _id: song._id, image: song.img }));

    res.status(200).json({
      status: "success",
      results: songs.length,
      data: {
        images,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed to get all songs",
      message: err,
    });
  }
};

exports.getAllSongs = async (req, res) => {
  try {
    const features = new APIFeatures(Song.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const songs = await features.query;

    res.status(200).json({
      status: "success",
      results: songs.length,
      data: {
        songs,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed to get all songs",
      message: err,
    });
  }
};

exports.createSong = async (req, res) => {
  try {
    const newSong = await Song.create(req.body);
    res.status(201).json({
      status: "success song created",
      data: {
        song: newSong,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: "Invalid data sent",
    });
  }
};
