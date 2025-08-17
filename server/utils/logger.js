// logger.js
const { createLogger, format, transports } = require("winston");
require("winston-daily-rotate-file");

const { combine, timestamp, printf, colorize } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  const istTime = new Date(timestamp).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });
  return `${istTime} [${level}]: ${message}`;
});

const excludeErrors = format((info) => {
  return info.level === "error" ? false : info;
});

const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: "logs/app-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
  format: combine(excludeErrors(), logFormat),
});

const dailyRotateErrorTransport = new transports.DailyRotateFile({
  filename: "logs/error-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
  level: "error",
});

const logger = createLogger({
  level: "info",
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), logFormat),
  transports: [
    new transports.Console({
      format: combine(colorize(), logFormat),
    }),

    dailyRotateFileTransport,

    dailyRotateErrorTransport,
  ],
  exitOnError: false,
});

module.exports = logger;
