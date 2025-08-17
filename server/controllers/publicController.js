const catchAsync = require("../utils/catchAsync");
const Certificate = require("../models/certificate");
const Project = require("../models/projectSchema");
const Email = require("../utils/email");
const AppError = require("../utils/appError");

exports.getCertificate = catchAsync(async (req, res) => {
  let data = Certificate.find();
  data = data.sort("-createdAt").select("-createdAt -updatedAt -__v ");

  const result = await data;

  if (!result) {
    return res.status(200).json({
      success: false,
      message: "No data found",
    });
  }
  return res.status(200).json({
    success: true,
    message: ` ${result.length} data found`,
    data: result,
  });
});

exports.showProjects = catchAsync(async (req, res) => {
  let data = Project.find();
  data = data.sort("-createdAt").select("-createdAt -updatedAt -__v ");

  const result = await data;
  if (!result) {
    return res.status(200).json({
      success: false,
      message: "No data found",
    });
  }
  return res.status(200).json({
    success: true,
    message: `${result.length} data found`,
    data: result,
  });
});

exports.sendMail = catchAsync(async (req, res, next) => {
  const { fullName, email, message } = req.body;

  if (!email || !message || !fullName) {
    return next(
      new AppError("Please provide fullName, email and message", 400)
    );
  }

  const adminMail = new Email(
    {
      email: "shreekant4062@gmail.com",
      fullName: "Shreekant",
    },
    {
      from: `${fullName} <${email}>`,
    }
  );
  await adminMail.sendContactMessageToAdmin({
    fullName,
    email,
    subject: `New message from ${fullName}`,
    message,
  });
  const userMail = new Email(
    {
      email,
      fullName,
    },
    {
      from: `Shreekant <shreekant4062@gmail.com>`,
    }
  );
  await userMail.sendAutoReply({ fullName, message });

  res.status(200).json({
    success: true,
    message: "Email sent successfully",
  });
});
