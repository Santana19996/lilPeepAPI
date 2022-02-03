const Song = require("/Users/oscarsantana/LilPeepAPI/modules/musicModule.js");

exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
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

// exports.getSong = async (req, res) => {
//   try {
//     const song = await Song.findOne();
//     status(200).json({
//       status: "success",
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "failed to get specific song",
//     });
//   }
// };

// exports.getAllImages = (req, res) => {
//   const images = songs.find((song) => song.img);
//   res.status(200).json({
//     status: "Success here is the images",
//     data: images,
//   });
// };
