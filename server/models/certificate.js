const mongoose = require("mongoose");

const certificate = new mongoose.Schema(
  {
    title: { type: String, required: true },
    issued: { type: String , required: true},
    Url: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("certificate", certificate);
module.exports = Project;
