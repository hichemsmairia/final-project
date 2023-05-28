const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
//importtation du module routes

const authRoutes = require("./routes/authRoutes");
const moviesRoutes = require("./routes/moviesRoutes");

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use(cors());

app.use("/auth", authRoutes);
app.use("/movies", moviesRoutes);
mongoose
  .connect(
    "mongodb+srv://hichem:hichem@cluster0.p4yzy21.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("base de donneés connectée!");
  });

app.listen(5000, () => console.log("serveur fonctionne ! !!!!"));

//
