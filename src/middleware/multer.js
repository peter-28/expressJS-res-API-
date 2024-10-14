const multer = require("multer");
const patch = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const time = new Date().getTime();
    const filename = file.originalname;
    cb(null, `${time}-${filename}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5 MB
  },
});

module.exports = upload;
