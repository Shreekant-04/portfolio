const express = require("express");
const router = express.Router();

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

router.route("/").post(addCertificate);

module.exports = router;
