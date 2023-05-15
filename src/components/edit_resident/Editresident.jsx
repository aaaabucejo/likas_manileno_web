import "./editresident.scss"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import React,{useEffect,useState} from "react";
import axios from 'axios';
import { Alert } from "@mui/material";
import { PopperUnstyled } from "@mui/base";
import SearchBar from "../searchbar/SearchBar";



const Input = styled('input')({
    display: 'none',
  });
  
function Editresident() {

  const[users,setUser] = useState([]);
  const[firstName,setFirstName] = useState("");
  const[lastName,setLastName] = useState("");
  const[contactNo,setContactNo] = useState("");
  const[siteT,setSiteT] = useState("");
  const[age,setAge] = useState("");
 
  
  //update resident function
  function UpdateUser(){
    const data = {
      firstName: firstName,//key value
      lastName:lastName, //input na papalitan 
      contactNo:contactNo,
      siteT:siteT,
      age:age
    }
    
    axios.post('http://localhost:4000/app/updateUsers',data)
    .then(res => {
      console.log(res)
    }).catch((res) =>{
      console.log(res)
    })
    console.log([data])
  }


  return (
    <div className="editresident">

    <div className="editresidentContainer">
    
    <div className="title">Edit Resident</div>

    <div className="left">
    <Stack direction="row" alignItems="center" spacing={2}>
    <img src="https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/278508806_5207949865893600_4974729196013864451_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=rFzNxlRnUeMAX-_UJCm&_nc_ht=scontent.fmnl17-2.fna&oh=00_AT8e3usqcl6e9cPtqq4Iv0n9rZYjNT_Yxe3ocI7vpKbu1g&oe=62703BE9"
     alt="" className="indiImg" />
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button  size="small" variant="contained" component="span">
          Upload
        </Button>
      </label>
    </Stack>

    </div>
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
      label="contactNo" 
      style={{width:'25vw'}}
      onChange={(e) => setContactNo(e.target.value)}
    />
     <TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="Site" 
      style={{width:'25vw'}}
      onChange={(e) => setSiteT(e.target.value)}
    />
     <TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="Age" 
      onChange={(e) => setAge(e.target.value)}
    />
     
    </Box>

    <div className="actions">
            <div className="back">
            <Link to="../userId"  style={{textDecoration:"none"}}>
            <button>Cancel</button>
            </Link>
            </div>
            <div className="submit">
            <Link to="../userId"  style={{textDecoration:"none"}}>
            <button onClick={()=>UpdateUser(firstName)}>Submit</button>
            </Link>
            </div>
            {/* <div>
            <button onClick={()=>UpdateUser(firstName)}>Submit</button>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default Editresident