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

// exports.getAllSongNames = (req, res) => {
//   const songNames = songs.map((song) => song.name);
//   res.status(200).json({
//     status: "Success",
//     data: {
//       songNames: songNames,
//     },
//   });
// };

// exports.getSong = (req, res) => {
//   const id = req.params.id;
//   const song = songs.find((song) => song._id === id);
//   console.log(song); // Undefined?TF

//   res.status(200).json({
//     status: "Success here is the song you are looking for!",
//     data: {
//       song: song,
//     },
//   });
// };

// exports.getAllImages = (req, res) => {
//   const images = songs.find((song) => song.img);
//   res.status(200).json({
//     status: "Success here is the images",
//     data: images,
//   });
// };
