import "./forminput.scss";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'


// const FormInput = () =>{
  function FormInput() {
    const[address,setAddress] = useState("");
    const[capacity,setCapacity] = useState("");
    const[room,setRoom] = useState("");
    const[restroom,setRestRoom] = useState("");
    const[kitchen,setKitchen] = useState("");
    const[evehicle,setEvehicle] = useState("");
    const[firstaid,setFirstAid] = useState("");
    const[official,setOfficial] = useState("");
    const[description,setDescription] = useState("");
    

    function handleButton(){
      //pag pinindot ko yung submit
      const data = {
        address: address,
        capacity: capacity,
        room: room,
        restroom: restroom,
        kitchen: kitchen,
        evehicle: evehicle,
        firstaid: firstaid,
        official: official,
        description: description
      }
      //dito ma sasave ng database
      axios.post('https://likasmanileno-backend.herokuapp.com/app/signuplocation',data)
      .then(res => {
        console.log(res)
        console.log("nice 1")
      }).catch(err =>{
        console.log(err)
      })
    }
    return(
        <div className="forminput">
        
        <Box  component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
      noValidate
      autoComplete="off">


        <div>

        <div className="title">Add Evacuation Site</div>
        {/* <form onSubmit={submit}></form> */}
        <TextField
          // required
          id="outlined-required"
          label="Evactuation Site"
          placeholder="National University"
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          required
          id="outlined-number"
          label="Capacity"
          // type="number"
          onChange={(e) => setCapacity(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="outlined-number"
          label="Rooms"
          //type="number"
          onChange={(e) => setRoom(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="outlined-number"
          label="Restrooms"
          // type="number"
          onChange={(e) => setRestRoom(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="outlined-number"
          label="Kitchens"
          // type="number"
          onChange={(e) => setKitchen(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          //  required
          id="outlined-required"
          label="Emergency Vechicles"
          onChange={(e) => setEvehicle(e.target.value)}
        />
        <TextField
           required
          id="outlined-required"
          label="First Aids"
          placeholder="Ready"
          onChange={(e) => setFirstAid(e.target.value)}
        />
         <TextField
           required
          id="outlined-required"
          label="Officials"
          placeholder="Ready"
          onChange={(e) => setOfficial(e.target.value)}
        />
         
        <TextField
           required
          id="outlined-required"
          label="Description"
          placeholder="Full"
          onChange={(e) => setDescription(e.target.value)}
        />
        
        <div className="actions">
            <div className="back">
            <Link to="/Sites"  style={{textDecoration:"none"}}>
            <button>Back</button>
            </Link>
            </div>
            {/* <button onClick={handleButton}>Submit</button> */}
            <div className="submit">
            <Link to="/Sites"  style={{textDecoration:"none"}}>
            <button onClick={handleButton}>Submit</button>
            </Link>
            </div>
        </div>
       
      </div>
      </Box>
        </div>
    )
}

export default FormInput