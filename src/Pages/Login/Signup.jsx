import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signUpRequest } from "../../Redux/Auth/action";
import Login from "./Login";
import "./Signup.css";

const initState = {
    name: "",
    email: '',
    password: '',
    mobile: "",
}
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
    const [ data, setData   ] = useState(initState);
    const { name, email, password, mobile } = data
const handleChange = (e)=>{
    const { name, value } = e.target;
    setData({...data, [name]: value})   
}

const handleSubmit = (e)=>{
    e.preventDefault()
  setData(initState)
    dispatch(signUpRequest(data))
  navigate("/login")
}
  return (
    <div className="box">
      <div className="outerDiv">
        <div className="innerDiv">
          <form onSubmit={handleSubmit}>
            <h3>Create Your Account</h3>
            <div className="formInputgroup">
              <input
                type="text"
                className="formInput"
                placeholder="Nick Name"
                onChange={handleChange}
                name="name"
                value={name}
              />
            </div>
            <div className="formInputgroup">
              <input
                type="email"
                className="formInput"
                placeholder="Email address"
                onChange={handleChange}
                name="email"
                value={email}
              />
            </div>
            <div className="formInputgroup">
              <input
                type="password"
                className="formInput"
                placeholder=" Password"
                onChange={handleChange}
                name="password"
                value={password}
              />
            </div>
            <div className="formInputgroup">
              <input
                type="number"
                className="formInput"
                placeholder="Enter mobile number"
                onChange={handleChange}
                name="mobile"
                value={mobile}

              />
            </div>
            <input type="checkbox" />
            <label>
              I agree to GeekBuying's Terms of Use & Privacy Policy.
            </label>
            <br />
            <button type="submit" className="s">
              Create Account
            </button>
            <Link to="/login">
            <p className="hint" >
              Already Registered login ?
            </p></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
