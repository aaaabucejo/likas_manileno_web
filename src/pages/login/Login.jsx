import "./login.scss";
import logo from '../images/LandingIcon.png';
import axios from 'axios';
// import { useHistory } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom';
import React,{useEffect,useState,useContext} from "react";
import { useRef} from "react";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import AlertDialog from "../../components/alert/AlertDialog";
import SuccessDialog from "../../components/alert/SuccessDialog"



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {

  //SnackBar
  const [emailVerificationOpen, setEmailerVerificationOpen] = React.useState(false);
  const [fillUpConfirm, setFillUpConfirm] = React.useState(false);
  const [invalidEmailAdd, setInvalidEmailAdd] = React.useState(false);
  const [passMore, setPassMore] = React.useState(false);
  const [passLess, setPassLess] = React.useState(false);
  const [invalidName, setInvalidName] = React.useState(false);
  const [invalidContact, setInvalidContact] = React.useState(false);
  

  const [open, setOpen] = React.useState(false);

  //pang fade-away ng snackbar
  const handleSnackClose = (event) => {

    setFillUpConfirm(false);
    setEmailerVerificationOpen(false)
    setInvalidEmailAdd(false)
    setPassMore(false)
    setPassLess(false)
    setInvalidName(false)
    setInvalidContact(false)

  };

  //register
  const[firstName,setFirstName] = useState("");
  const[lastName,setLastName] = useState("");
  const[contact,setContact] = useState("");
  const[age,setAge] = useState("");
  
  //login
  const[email,setEmail] = useState("")
  const[passWord,setPassWord] = useState("");

  const [Dialogopen, setDialogOpen] = React.useState(false);
  const userRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate()



  const handleButton = () =>{
     
      const data = {
        email: email,
        passWord: passWord,
        firstName: firstName,
        lastName: lastName,
        contact: contact,
        age: age,
      }
   axios.post('https://likasmanileno-api.onrender.com/app/signupofficials',data)
    .then(res => {
      console.log(res)
      setOpen(false);
      // setEmailerVerificationOpen(true);
      setErrMsg(<SuccessDialog/>);

    }).catch((res) =>{
      console.log(res)
    })
   
  }

   

  
  function isButtonDisable(){
    if(
      email == '' || 
      passWord == '' || 
      firstName == '' || 
      lastName == '' ||
      contact == '' ||
      age == '' ||
      emailChecker() || 
      passwordChecker()||
      firstNameChecker()||
      lastNameChecker()||
      contactChecker()){
      return true
      
    }else{
      return false
    }
  }

  function emailChecker(){
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   if(email != ''){
      if(!regexEmail.test(email)){
        return true;
      }
   }else{
    return false;
   }
  }

  function passwordChecker(){
    if(passWord != ''){
      if(passWord.length<4){
        return true;
      }else if(passWord.length>8){
        return true;
      }
    }else{
      return false
    }
  }

  function firstNameChecker(){
    const regexLetterOnly = /^[a-zA-Z ]*$/;
    if(firstName !=''){
      if(!regexLetterOnly.test(firstName)){
        return true;
      }
    }else{
      return false;
    }
  }

   function lastNameChecker(){
    const regexLetterOnly = /^[a-zA-Z ]*$/;
    if(lastName !=''){
      if(!regexLetterOnly.test(lastName)){
        return true;
      }
    }else{
      return false;
    }
  }

  function contactChecker(){
    const regexNumberOnly = /^[0-9\b]+$/;
    if(contact !=''){
      if(!regexNumberOnly.test(contact)|| contact.length < 11 || contact.length > 11 ){
        return true
      }
    }else{
      return false;
    }
  }



  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const toDashBoard = () =>{
    navigate('/')
  }
  var message;
  function handleLogin(){

    const data = {
      email: email,
      passWord: passWord
    }
    
    axios.post('https://likasmanileno-api.onrender.com/app/signin',data)
    .then(res => {
      if(res.data.status =='Login Successful'){
        message = res.data.status;
        navigate('/')
         localStorage.setItem('token',res.data.token)
         console.log(res.data)
         
      } else if (res.data.status == 'incorrect username or password'){
        message = res.data.status;
        console.log(res.data.status)
        setErrMsg(<AlertDialog/>);
      }
    }).catch((res) =>{
      // console.log(res)
      console.log(res)
    })
  }


  

  useEffect(() => {
    userRef.current.focus();
  }, [])

  return (
    <>
    {success ? (
      <section>
        <h1> Logged In! </h1>
        <br />
        <p>
          <a onClick={ toDashBoard }>back to home</a>
        </p>
      </section> ) : (
  
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
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

          <div className="loginBox" onSubmit={handleLogin}>
            
              <input 
              id="username"
              ref={userRef}
              autoComplete="on"
              placeholder="Username" 
              className="loginInput"
              required onChange={(e) => setEmail(e.target.value)}
              value={email}
              />

              <input 
              id="password"
              ref={userRef}
              autoComplete="off"
              placeholder="Password"
              className="loginInput" 
              type="password" required onChange={(e) => setPassWord(e.target.value)}
              value={passWord}
              />
          
              <div className="signUp">
           Don't have an account?
           <Link onClick={handleClickOpen}  style={{textDecoration:"none"}} className="link"> Sign up</Link>
           <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{fontWeight: 500,}}>Register Admin Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To make an account please fill out the form below.
          </DialogContentText>
          <TextField
            error={emailChecker()}
            margin="dense"
            id="email"
            label={emailChecker()? 'Invalid Email':'Email'}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            autoFocus
            error={passwordChecker()}
            margin="dense"
            id="password"
            label={passwordChecker()? passWord.length<4?'Password must have more than 4 characters':passWord.length>8?'Password must not exceed more than 8 characters':'':'Password'}
            type="password"
            fullWidth
            onChange={(e) => setPassWord(e.target.value)}
          />

           <TextField
            autoFocus
            error={firstNameChecker()}
            margin="dense"
            id="firstName"
            label={firstNameChecker()? 'Invalid First Name': 'First Name'}
            fullWidth
            onChange={(e) => setFirstName(e.target.value)}
          />

            <TextField
            autoFocus
            error={lastNameChecker()}
            margin="dense"
            id="lastName"
            label={lastNameChecker()? 'Invalid Last Name':'Last Name'}
            fullWidth
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            autoFocus
            error={contactChecker()}
            style={{maxlength: 11,}}
            margin="dense"
            id="contact"
            label={contactChecker()? 'Invalid Contact Number':'Contact Number'}
            Width='15'
            maxlength='11'
            onChange={(e) => setContact(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            autoFocus
            // error={contactChecker()}
            style={{maxlength: 11,}}
            margin="dense"
            input type = "number"
            id="age"
            label="Age"
            Width='15'
            maxlength='11'
            onChange={(e) => setAge(e.target.value)}
          /> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           
    
        </DialogContent>
        <DialogActions>
        <Stack  direction="row" spacing={2}>
        <Button onClick={handleClose} variant="contained">Cancel</Button>
        <Button disabled={isButtonDisable()} onClick={handleButton}  variant="outlined">Register</Button>
        </Stack>
        </DialogActions>
      </Dialog>
           </div>
              <button className="loginButton" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  )
}

export default Login