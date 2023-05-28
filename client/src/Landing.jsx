import React from "react";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  const detectedLogin = async () => {
    console.log(localStorage.getItem("userData"));
    const userData = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : null;
    if (userData && userData.role == "user") {
      navigate("/movie_list", { replace: true });
    }
    if (userData && userData.role == "admin") {
      navigate("/movies_management", { replace: true });
    }

    if (!userData && window.location.pathname == "/login") {
      navigate("/login", { replace: true });
    }
    if (!userData && window.location.pathname == "/") {
      navigate("/", { replace: true });
    }
    if (!userData && window.location.pathname == "/register") {
      navigate("/register", { replace: true });
    }
  };

  useEffect(() => {
    detectedLogin();
  }, []);
  return (
    <div className="landing_container">
      <div class="container-fluid min-vh-100" style={{ paddingTop: "30vh" }}>
        <div>
          <div
            class="col-md-6 offset-5 my-5 bg bg-dark p-5 text-center"
            style={{ opacity: 0.95, borderRadius: "10%" }}
          >
            <h1 className="landing_h1">
              Votre platforme des films
            </h1>
            <p className="landing_p"></p>
            <button class="landing_btn my-3"  onClick={()=>navigate("/login")} >Bienvenue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
