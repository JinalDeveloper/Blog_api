var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const adminRoute = require("./routes/adminRoute");
var usersRouter = require("./routes/userRoute");
const categoryRoute = require("./routes/categoryRoute");
const blogApiRoute = require("./routes/blogApiRoute");
var indexRouter = require("./routes/index");

mongoose
  .connect(process.env.MONGOOSE_API)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", adminRoute);
app.use("/", usersRouter);
app.use("/", categoryRoute);
app.use("/", blogApiRoute);
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
