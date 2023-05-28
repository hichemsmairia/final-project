const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  files: {
    type: Array,
  },
  /*
    files = [des liens ]
  */
});

module.exports = mongoose.model("movie", movieSchema);
/*
mon-cv-.pdf

mon-cv-454545-4564545-4564545-454.pdf




*/
