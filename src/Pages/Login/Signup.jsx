import React,{useState} from 'react'
import {Alert} from 'react-bootstrap';
import Login from './Login';
import './Signup.css';
const Register = () => { 
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    const [flag,setFlag]=useState(false);
    const [login,setLogin]=useState(true);
    
    function handleSubmit(e) {
        e.preventDefault();

        if(!name|| !email ||!password ||!phone){
            setFlag(true);

        }
        else{
            setFlag(false);
            localStorage.setItem("Email",JSON.stringify(email));
            localStorage.setItem("Password",JSON.stringify(password));
            console.log("Saved LS");
            setLogin(!login);

        }

    }
    function handleClick(){
        setLogin(!login);
    }

  return (
    <div className="box">
           <div className='outerDiv'>
           <div className='innerDiv'>
        {login ? (

        <form onSubmit={handleSubmit}>
            <h3>Create Your Account</h3>
            <div className='formInputgroup'>
                <input type='text' className='formInput'
                 placeholder='Nick Name'
                 onChange={(event)=> setName(event.target.value)} />

            </div>
            <div className='formInputgroup'>
                <input type='text' className='formInput'
                 placeholder='Email address'
                 onChange={(event)=> setEmail(event.target.value)} />
                
            </div>
            <div className='formInputgroup'>
                <input type='password' className='formInput'
                 placeholder=' Password'
                 onChange={(event)=> setPassword(event.target.value)} />
                
            </div>
            <div className='formInputgroup'>
                <input type='text' className='formInput'
                 placeholder='Enter mobile number'
                 onChange={(event)=> setPhone(event.target.value)} />
                
            </div>
            <input type="checkbox" />  
                 <label>I agree to GeekBuying's Terms of Use & Privacy Policy.</label><br/>
            <button type="submit" className='s'>Create Account</button>
            <p className='hint' onClick={handleClick} >Alread Registered login ?</p>

            {flag && (
               <Alert color ="primary" variant='danger'>
                  Please Fill Every Field 
               </Alert> 
            )}
        </form>
        ):(
            <Login />
        )}
        </div>
          </div>
    </div>
  )
}

export default Register;