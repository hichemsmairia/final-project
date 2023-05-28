import React, { useState } from "react";
import axios from "axios";
function AddMovie() {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    year: 0,
    poster: "",
    files: "",
  });

  const handlePosterChange = (event) => {
    // event.target.value
    const file = event.target.files[0];
    console.log(file);
    /*
title : "dfsfs"
year : 2005
property 3 : dfdfdf


*/
    const reader = new FileReader();
    reader.onload = (event) => {
      setMovie({ ...movie, poster: event.target.result });
      console.log(event.target.result); // event.target.result == taswira en base 64
    };
    reader.readAsDataURL(file);
  };

  //fonction ajout film !
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(movie);

    var formData = new FormData();
    for (var key in movie) {
      formData.append(key, movie[key]);
    }
    // le files peut contenir plus qu'un fichier
    // donc je dois faire un parcours
    for (const key of Object.keys(movie.files)) {
      formData.append("files", movie.files[key]);
      // ['files',"server/video01","server/vide2".....]
    }

    axios.post("http://localhost:5000/movies/add_movie", formData).then(() => {
      console.log("movie ajouté");
    });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="card col-md-12 my-3">
          <div className="card-header bg-dark text-white text-center">
            Ajouter un film
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-4 d-flex align-items-center justify-content-center">
                <img
                  className="img-fluid"
                  src="https://img.freepik.com/free-vector/movie-night-concept-illustration_114360-379.jpg"
                />
              </div>
              <div className="col-8">
                <form
                  onSubmit={handleSubmit}
                  className="d-flex flex-column align-items-center"
                >
                  <div className="form-group col-md-6">
                    <label>Titre de film:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={movie.title}
                      onChange={(e) =>
                        setMovie({ ...movie, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Description de film:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={movie.description}
                      onChange={(e) =>
                        setMovie({ ...movie, description: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Anneé du film:</label>
                    <input
                      type="number"
                      className="form-control"
                      value={movie.year}
                      onChange={(e) =>
                        setMovie({ ...movie, year: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="poster">
                      Poster :{" "}
                      <i class="fa fa-camera-retro" aria-hidden="true"></i>
                    </label>

                    <input
                      style={{ display: "none" }}
                      type="file"
                      id="poster"
                      accept="image/*"
                      className="form-control"
                      onChange={handlePosterChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="trailer">
                      Trailer :{" "}
                      <i class="fa fa-video-camera" aria-hidden="true"></i>
                    </label>

                    <input
                      style={{ display: "none" }}
                      id="trailer"
                      type="file"
                      className="form-control"
                      onChange={(e) => {
                        setMovie({ ...movie, files: e.target.files });
                        console.log(e.target.files);
                      }}
                      multiple
                    />
                  </div>
                  <button type="submit" className="btn btn-success mt-3">
                    <i
                      class="fa fa-trash"
                      aria-hidden="true"
                      style={{ color: "white" }}
                    ></i>
                    ajouter le film
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMovie;
