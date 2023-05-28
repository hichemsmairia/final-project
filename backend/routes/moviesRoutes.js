const movieController = require("../controllers/movieController");
const express = require("express");
const router = express.Router();

const { v4: uuidv4 } = require("uuid");
const multer = require("multer");

const DIR = "../client/public/";
// dir c'est le path ou je veux enregister les fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    // mon CV.pdf   ====>  mon cv.pdf ==> ['mon','cv.pdf'] =>mon-cv.pdf
    cb(null, uuidv4() + "-" + fileName);
    //45454545fd5f5dfdfdfzzezezze-mon-cv.pdf
  },
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "video/mp4") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only video / mp4 format allowed!"));
    }
  },
});

router.post("/add_movie", upload.array("files", 1), movieController.add);

router.get("/get_all", movieController.getAll);

module.exports = router;
