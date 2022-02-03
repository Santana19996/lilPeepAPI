const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Song = require("/Users/oscarsantana/LilPeepAPI/modules/musicModule.js");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB, {}).then((con) => {
  console.log(con.connections);
  console.log("DB CONNECTED");
});

const songs = JSON.parse(
  fs.readFileSync("/Users/oscarsantana/LilPeepAPI/data.json", "utf-8")
);

const importData = async () => {
  try {
    await Song.create(songs);
    console.log("Yoo you loaded the Data into the DB BOI");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
}

console.log(process.argv);
