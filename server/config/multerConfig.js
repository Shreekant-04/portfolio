const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudconfig");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    const extension = file.mimetype.split("/")[1];
    return {
      folder: "uploads",
      format: extension,
      public_id: file.originalname.split(".")[0],
    };
  },
});

const upload = multer({ storage });
module.exports = upload;
