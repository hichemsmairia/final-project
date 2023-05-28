import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { signup } from "./redux/slices/authSlice";
import {toast,ToastContainer} from 'react-toastify'

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const error = useSelector((state) => state.auth.error);

  const msg = useSelector((state) => state.auth.msg);

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(signup(user));
   
  };
  useEffect(() => {
    if (error != null) {
      toast.warn(error);
    } else if (msg) {
      toast.success(msg);
    }
  }, [error, msg]);
 





  // useEffect(()=>{
  //   alert('bonjour')
  // },[x])









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
            <h1 className="mb-4">creer un compte </h1>
            <form class="d-flex flex-column align-items-center justify-content-center">
              <div className="form-group my-3">
                <input
                  type="text"
                  className="form-control my-3 p-2"
                  placeholder="Tapez votre nom utilisateur"
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                />
             
                <input
                  type="email"
                  className="form-control my-3 p-2"
                  placeholder="Taper votre email"
                  onChange={(e) =>
                    setUser({ ...user, email: e.target.value })
                  }
                />
                  <input
                  type="password"
                  className="form-control my-3 p-2"
                  placeholder="Taper votre mot de passe "
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <div className="form-group my-3">
                <button className="btn btn-success" onClick={handleRegister}>
                  Se connecter
                </button>
              </div>
            </form>
            <button
              className="btn btn-primary mt-2"
              onClick={()=>navigate('/register')}
            >
              Déja un membre ? Connectez-vous !
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
