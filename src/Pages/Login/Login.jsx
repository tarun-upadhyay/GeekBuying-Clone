import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {Alert} from "react-bootstrap";
import './Signup.css';
const Login = () => {
const [emaillogIn,setEmaillogIn]=useState("");
const [passwordlogIn,setPasswordlogIn]=useState("");
const [flag,setFlag]=useState(false);
const [Homepage,setHomePage]=useState(true);
function handleLogin(e){
    e.preventDefault();
    let email=localStorage.getItem("Email").replace(/"/g,"");
    let password=localStorage.getItem("Password").replace(/"/g,"");

    if(!emaillogIn || !passwordlogIn){
        setFlag(true);
        console.log("Empty");
    }
    else if(passwordlogIn !==password ||emaillogIn!==email){
        setFlag(true)
    }
    else{
        setHomePage(!Homepage);
        setFlag(false)
    }
}

return (
    <div>
       
        <form onSubmit={handleLogin}>
            <h3>Sign In</h3>
<div className='formInputgroup'>  

                <input type='text' className='formInput'
                 placeholder='Email address'
                 onChange={(event)=> setEmaillogIn(event.target.value)} />
                
            </div>
            <div className='formInputgroup'>
            
                <input type='password' className='formInput'
                 placeholder=' Password'
                 onChange={(event)=> setPasswordlogIn(event.target.value)} /><br/>
     
            </div>
            <Link to="/Cart"><button type="submit" className='s'>Login</button></Link>
            {/* {flag && (
            //    <Alert color ="primary" variant='danger'>
            //       Please Fill Correct Info 
            //    </Alert> 
            )} */}

            </form>
    </div>
  )
}

export default Login;