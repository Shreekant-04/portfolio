process.env.UV_THREADPOOL_SIZE = 16;
const logger = require("./utils/logger");

process.on("uncaughtException", (err) => {
  logger.info("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  logger.error(err.name, err);
  console.log(err);
  process.exit(1);
});
require("dotenv").config({ quiet: true });

require("./config/database")();

const app = require("./app");
const Email = require("./utils/email");

const maildata = {
  email: "shreekant4062@gmail.com",
  fullName: "Shreekant",
};

const mail = new Email(maildata);
mail.verify();

const server = app.listen(process.env.PORT || 3000, () => {
  logger.info("Server is running on port", process.env.PORT || 3000);
});

process.on("unhandledRejection", (err) => {
  logger.info("UNHANDLED REJECTION! 💥 Shutting down...");
  logger.error(err.name, err);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  logger.info("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    logger.info("💥 Process terminated!");
  });
});
