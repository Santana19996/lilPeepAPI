const fs = require("fs");

const songs = JSON.parse(
  fs.readFileSync(`/Users/oscarsantana/LilPeepAPI/data.json`)
);

// exports.checkId = (req, res, next, val) => {
//   if (req.params.id * 1 > songs.length) {
//     return res.status(404).json({
//       status: "fail MF",
//       message: "Invalid Id",
//     });
//   }
//   next();
// };

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
