const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
const morgan = require("morgan");
dotEnv.config();

const connectDB = require("./config/database");
const Project = require("./routes/Project");
const certificate = require("./routes/certificateRoute");

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
}

app.use("/", Project);
app.use("/certificate", certificate);

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello buddy" });
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("listening on", port);
});
