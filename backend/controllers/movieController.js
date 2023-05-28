const movieModel = require("../models/movieModel");

const add = async (req, res) => {
  console.log(req.body);
  try {
    const reqFiles = [];
    for (var i = 0; i < req.files.length; i++) {
      reqFiles.push(req.files[i].filename);
    } 
    let newMovie = new movieModel({ ...req.body, files: reqFiles });
    await newMovie.save();
    console.log("film ajouté avec succes ! ");
    res.send("film ajouté avec succes ! ");
  } catch (err) {
    console.log(err);
  }
};

const getAll = async (req, res) => {
  let data = await movieModel.find({});
  res.send(data);
};

module.exports = { add, getAll };

// video.mp4  => 45454-45454-video.mp4
//video.mp4 =>11111-444-55-video.mp4
