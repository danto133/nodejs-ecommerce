const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression())

// init db

// init routes
app.get("/", (req, res, next) => {
  const strCompress = "Hello Dev";
  return res.status(200).json({
    message: "Welcome !!",
    metadata: strCompress.repeat(200000),
  })
})

// handling error

module.exports = app;