import "./login.scss";
import logo from '../images/Landing_logo3.png';
import { useState } from "react";
import axios from 'axios';

function Login() {

  const[lUsername,setLusername] = useState("");
  const[loginPassword,setLoginpassword] = useState("");

function handleLogin(){
   
    const data = {
      username: lUsername,
      password: loginPassword
    }
    
    axios.post('http://localhost:4000/app/signin',data)
    .then(res => {
      console.log(res)
    }).catch((res) =>{
      console.log(res)
    })
  }

  const date = new Date();

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          {/* <h3 className="loginLogo">LikasManileno</h3> */} 
          
          <img className="loginLogo" src={logo}/>
          
          <span className="loginDesc">
            {/* Makes Sures Residents Are Safe and Well 24/7. */}
          </span>
        </div>

        <div className="loginRight">
        <h3 className="title">Login your admin account</h3>
        
          <div className="loginBox">
              <input placeholder="Username" className="loginInput" required onChange={(e) => setLusername(e.target.value)}/>
              <input placeholder="Password" className="loginInput" type="password" required onChange={(e) => setLoginpassword(e.target.value)}/>
              <button className="loginButton" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Login