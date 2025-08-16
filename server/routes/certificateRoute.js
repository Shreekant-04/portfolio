const express = require("express");
const router = express.Router();
const Certificate = require("../models/certificate");

const addCertificate = async (req, res) => {
  const { secretkey } = req.headers;
  const reqData = req.body;
  const hasSecretKey = secretkey === process.env.SECRET_KEY;
  if (hasSecretKey) {
    try {
      const data = new Certificate(reqData);
      await data.save();
      return res.status(200).json({
        success: true,
        authorised: true,
        message: "added successfully",
        data,
      });
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        success: false,
        authorised: true,
        message: err,
      });
    }
  } else {
    return res.status(200).json({
      success: false,
      authorised: false,
      message: "You are not authorised",
    });
  }
};

const getCetrificate = async (req, res) => {
  try {
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
      data:result
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: `error: ${err}`,
    });
  }
};

router.route("/").post(addCertificate).get(getCetrificate);

module.exports = router;
