const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const publicRouter = require("./routes/publicRoutes");

app.use(cors());
app.use(express.json());
app.set("trust proxy", true);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("tiny"));
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello buddy" });
});

// Static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/otp", (req, res) => {
  res.render("mail/otp", {
    fullname: "Shreekant",
    otp: "123456",
  });
});

app.get("/auto-reply", (req, res) => {
  res.render("mail/auto_reply", {
    fullname: "Shreekant",
    message: "This is an automated reply. I will get back to you soon.",
  });
});
app.get("/message", (req, res) => {
  res.render("mail/message", {
    fullname: "Sk",
    message: "You have a new message.",
  });
});

app.use("/api/v1/public", publicRouter);

app.use("{*splat}", function (req, res, next) {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// Error handling middleware
app.use(globalErrorHandler);
module.exports = app;
