const express = require("express");
const router = express.Router();
const Project = require("../models/projectSchema");
const upload = require("../config/multerConfig");

router.post("/add", upload.single("file"), async (req, res) => {
  const { secretkey } = req.headers;
  const reqData = req.body;
  const file = req.file;
  const hasSecretKey = secretkey === process.env.SECRET_KEY;
  if (hasSecretKey) {
    try {
      const data = new Project({ ...reqData, imgUrl: file.path });
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
});

router.get("/show", async (req, res) => {
  try {
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
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: `error: ${err}`,
    });
  }
});

module.exports = router;
