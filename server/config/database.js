const mongoose = require("mongoose");
const logger = require("../utils/logger");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      minPoolSize: 50,
      maxPoolSize: 100,
    })
    .then(() => {
      logger.info("MongoDB Connected successfully ✔️ ");
    })
    .catch((err) => {
      logger.error(`✖ MongoDB Connection Error: ${err.message}`);
      process.exit(1);
    });
};
module.exports = connectDB;
