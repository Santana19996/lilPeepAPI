const express = require("express");
const morgan = require("morgan");

const songsRouter = require("/Users/oscarsantana/LilPeepAPI/routes/musicRoute.js");

const app = express();

// MiddleWare
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/songs", songsRouter);

module.exports = app;
