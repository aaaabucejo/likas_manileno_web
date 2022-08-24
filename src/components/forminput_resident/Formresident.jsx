import "./formresident.scss"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';


//Team name : BingBong
function Formresident() {

  const [users,setUser] = useState([]);
  const[firstName,setFirstName] = useState("");
  const[lastName,setLastName] = useState("");
  const[contactNo,setContactNo] = useState("");
  const[siteT,setSiteT] = useState("");
  const[status,setStatus] = useState("");
  const[username,setUsername] = useState("");
  const[password,setPassword] = useState("");
  // const[lUsername,setLusername] = useState("");
  // const[loginPassword,setLoginpassword] = useState("");

  function handleButton(){
    //pag pinindot ko yung submit
    const data = {
      firstName: firstName,
      lastName: lastName,
      contactNo: contactNo,
      siteT: siteT,
      status: status,
      username: username,
      password: password
    }
    
    //dito ma sasave ng database
    axios.post('http://localhost:4000/app/signup',data)
    .then(res => {
      console.log(res)
    }).catch((res) =>{
      console.log(res)
    })
  }

  // function handleLogin(){
   
  //   const data = {
  //     username: lUsername,
  //     password: loginPassword
  //   }
    
  //   axios.post('http://localhost:4000/app/signin',data)
  //   .then(res => {
  //     console.log(res)
  //   }).catch((res) =>{
  //     console.log(res)
  //   })
  // }


  
  return (
    <div className="formresident">

    <div className="title">Add Resident</div>
          <Box sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <TextField
        id="demo-helper-text-misaligned"
        label="First Name"
        onChange={(e) => setFirstName(e.target.value)}
    />
      <TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="Last Name"
      onChange={(e) => setLastName(e.target.value)}
    />
     <TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="Contact No#" 
      onChange={(e) => setContactNo(e.target.value)}
    />
     {/* <TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="Date Admitted" 
      di na to need kasi automatically na sya nag a-add ng data and time
    /> */}
     <TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="Site Transfered" 
      onChange={(e) => setSiteT(e.target.value)}
    />
     <TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="Status" 
      onChange={(e) => setStatus(e.target.value)}
    />
    <TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="Username" 
      onChange={(e) => setUsername(e.target.value)}
    /><TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="Password" 
      type="password"
      onChange={(e) => setPassword(e.target.value)}
    />
    <TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="Confirm Password" 
      type="password"
    />
    </Box>

    <div className="actions">
            <div className="back">
            <Link to="/users"  style={{textDecoration:"none"}}>
            <button>Back</button>
            </Link>
            </div>
            <div className="submit">
            <Link to="/users"  style={{textDecoration:"none"}}>
            <button onClick={handleButton}>Submit</button>
            </Link>
            </div>
        </div>
    </div>
  )
  
}

export default Formresident