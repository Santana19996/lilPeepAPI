const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "/Users/oscarsantana/LilPeepAPI/config.env" });
const app = require("/Users/oscarsantana/LilPeepAPI/app.js");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB, {}).then((con) => {
  console.log(con.connections);
  console.log("DB CONNECTED");
});

const port = 8080;
app.listen(port, () => {
  console.log("App running on port" + port);
});
