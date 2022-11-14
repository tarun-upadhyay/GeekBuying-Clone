import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "./signin.css";
import { useDispatch, useSelector } from "react-redux";
import { adminLoginRequest, loginRequest } from "../../Redux/Auth/action";
const Login = () => {
  const navigate = useNavigate();
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
      dispatch(loginRequest(data))
    }
  }


  if (store.isAuth) {
    navigate("/cart");
  }

  return (
    <div>
      <div id="signin_pare">
        <h3 id="sign">Sign In</h3>

        <form onSubmit={handleLogin}>
          <input
            id="mail"
            type="email"
            className="formInput"
            placeholder="Email address"
            onChange={(event) => setEmaillogIn(event.target.value)}
          />
          <br />
          <input
            type="password"
            className="formInput"
            placeholder="Password"
            onChange={(event) => setPasswordlogIn(event.target.value)}
          />
          <br />
          <input type="submit" value="SIGN IN" />
          <br />
        </form>
      </div>

      {/* {flag && (
            //    <Alert color ="primary" variant='danger'>
            //       Please Fill Correct Info 
            //    </Alert> 
            )} */}
    </div>
  );
};

export default Login;
