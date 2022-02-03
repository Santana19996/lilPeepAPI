const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A song name must be specified"],
    unique: false,
  },
  length: {
    type: String,
    required: [true, "A song length must be specified"],
  },
  img: {
    type: String,
    required: [true, "A song img must be specified"],
  },
  SongLink: {
    type: String,
    required: [true, "A song link must be specified"],
  },
});

const Song = mongoose.model("Song", musicSchema);

module.exports = Song;
