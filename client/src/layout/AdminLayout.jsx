import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
function AdminLayout({ children }) {
  const navigate = useNavigate();
    const dispatch = useDispatch();

  const handleLogout = () => {
       dispatch(logout());
        navigate("/login",{replace:true})
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <ToastContainer />
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <h4 className="text-center text-white">logo</h4>
          </div>
          <div>
            <img
              src="https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png"
              alt="User"
              className="rounded-circle text-white"
              width="50"
              height="50"
            />
            <button
              className="btn btn-outline-danger bg-danger ms-2 text-white font-weight-bolder"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-3">
            <div
              className="card"
              style={{ height: "90vh", border: "1px solid black" }}
            >
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item"
                    style={{
                      backgroundColor: "#f8f9fa",
                      border: "1px solid #ddd",
                      marginBottom: "2vh",
                    }}
                  >
                    <Link
                      to="/add_movie"
                      className="text-decoration-none text-dark"
                    >
                      <i
                        class="fa-solid fa-bars-progress px-3"
                        style={{ color: "#146EBE" }}
                      ></i>
                      Ajouter un film
                    </Link>
                  </li>
                  <li
                    className="list-group-item"
                    style={{
                      backgroundColor: "#f8f9fa",
                      border: "1px solid #ddd",
                      marginBottom: "2vh",
                    }}
                  >
                    <Link
                      to="/movies_management"
                      className="text-decoration-none text-dark"
                    >
                      <i
                        class="fas fa-tv-alt px-3"
                        style={{ color: "#146EBE" }}
                      ></i>
                      gestion des films
                    </Link>
                  </li>
                  <li
                    className="list-group-item"
                    style={{
                      backgroundColor: "#f8f9fa",
                      border: "1px solid #ddd",
                      marginBottom: "2vh",
                    }}
                  >
                    <Link
                      to="/users_management"
                      className="text-decoration-none text-dark"
                    >
                      <i
                        class="fas fa-user-friends px-3"
                        style={{ color: "#146EBE" }}
                      ></i>
                      Utilisateures
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">{children}</div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
