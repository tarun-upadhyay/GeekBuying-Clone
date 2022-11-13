import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { adminLoginRequest, loginRequest } from "../../Redux/Auth/action";
const Login = () => {
  const navigate = useNavigate()
  const [emaillogIn, setEmaillogIn] = useState("");
  const [passwordlogIn, setPasswordlogIn] = useState("");
  const dispatch = useDispatch();
  const store = useSelector((store) => store.AuthReducer);
  function handleLogin(e) {
    e.preventDefault();
    let data = { email: emaillogIn, password: passwordlogIn };
    if (emaillogIn === "admin@admin.com" && passwordlogIn === "admin") {
      dispatch(adminLoginRequest(data));
      navigate("/admin")
     
    } else {
      dispatch(loginRequest(data));
      if(store.isAuth){
   
        navigate("/cart")
      }
    }
  }

 

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h3>Sign In</h3>
        <div className="formInputgroup">
          <input
            type="text"
            className="formInput"
            placeholder="Email address"
            onChange={(event) => setEmaillogIn(event.target.value)}
          />
        </div>
        <div className="formInputgroup">
          <input
            type="password"
            className="formInput"
            placeholder="Password"
            onChange={(event) => setPasswordlogIn(event.target.value)}
          />
          <br />
        </div>

        <button type="submit" className="s">
          Login
        </button>

        {/* {flag && (
            //    <Alert color ="primary" variant='danger'>
            //       Please Fill Correct Info 
            //    </Alert> 
            )} */}
      </form>
    </div>
  );
};

export default Login;
