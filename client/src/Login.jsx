import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { signin } from "./redux/slices/authSlice";
import {toast,ToastContainer} from 'react-toastify'

function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const error = useSelector((state) => state.auth.error);
  const msg = useSelector((state) => state.auth.msg);
  const userInfo = useSelector((state)=>state.auth.userInfo)
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(signin(user));
     
  };

    useEffect(() => {
    if (error) {
      toast.warn(error);
    } else if (msg) {
      toast.success(msg);
    }
      if (userInfo.role === 'user') {
        setTimeout(() => {
          navigate('/movie_list',{replace:true});
        }, 1500);
      
    } else if (userInfo.role === 'admin') {
        setTimeout(() => {
       navigate('/add_movie',{replace:true});
        }, 1500);
    }
  }, [error, msg,userInfo]);
  return (
    <section className="d-flex justify-content-center">
      <ToastContainer />
      <div className="container my-5">
        <div className="row g-0">
          <div className="col-7">
            <img
              className="img-fluid"
              src="https://www.grandsierraresort.com/hubfs/recreation/Grand-Sierra-Cinema-view-of-auditorium_q085_1920x1080.jpg"
              alt="Cinema"
            />
          </div>
          <div className="col-5 d-flex flex-column align-items-center justify-content-center">
            <h1 className="mb-4">Se connecter</h1>
            <form class="d-flex flex-column align-items-center justify-content-center">
              <div className="form-group my-3">
                <input
                  type="email"
                  className="form-control my-3 p-2"
                  placeholder="Tapez votre email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
             
                <input
                  type="password"
                  className="form-control my-3 p-2"
                  placeholder="Mot de passe"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <div className="form-group my-3">
                <button className="btn btn-success" onClick={handleLogin}>
                  Se connecter
                </button>
              </div>
            </form>
            <button
              className="btn btn-primary mt-2"
              onClick={()=>navigate('/register')}
            >
              Pas encore membre ? Créez un compte maintenant !
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
