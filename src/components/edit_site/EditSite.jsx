import './editSite.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import React,{useEffect,useState} from "react";
import axios from 'axios';


const Input = styled('input')({
  display: 'none',
});


function EditSite() {
    const[address,setAddress] = useState("");
    const[capacity,setCapacity] = useState("");
    const[room,setRoom] = useState("");
    const[restroom,setRestRoom] = useState("");
    const[kitchen,setKitchen] = useState("");
    const[evehicle,setEvehicle] = useState("");
    const[firstaid,setFirstAid] = useState("");
    const[official,setOfficial] = useState("");
    const[description,setDescription] = useState("");

    function UpdateLocation(){
      const data = {
        address: address, //key value
        capacity: capacity,
        room: room,
        restroom: restroom,
        kitchen: kitchen,
        evehicle: evehicle,
        firstaid: firstaid,
        official: official,
        description: description
      }
    axios.post('https://likasmanileno-backend.herokuapp.com/app/updateLocation',data)
    .then(res => {
      console.log(res)
    }).catch((res) =>{
      console.log(res)
    })
    console.log([data])
  }



  return (
    <div className="EditSite">
        <div className='editsiteContainer'>
          <div className="title">Edit Evacuation Site</div>

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
    {/* comment ko muna yung text field na name kasi wala tayong name sa location meron lang address */}
      {/* <TextField
        id="demo-helper-text-misaligned"
        label="Name"
        style={{width:'25vw'}}

    /> */}
      <TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="Address" 
      style={{width:'45vw'}}
      onChange={(e) => setAddress(e.target.value)}
    />
     <TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="Capacity" 
      onChange={(e) => setCapacity(e.target.value)}
    />
     <TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="Rooms"
      onChange={(e) => setRoom(e.target.value)}
    />
     <TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="Restrooms" 
      onChange={(e) => setRestRoom(e.target.value)}
    />
     <TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="Kitchens" 
      onChange={(e) => setKitchen(e.target.value)}
    />
      <TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="Emergency Vechiles" 
      onChange={(e) => setEvehicle(e.target.value)}
    />
      <TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="First Aid" 
      onChange={(e) => setFirstAid(e.target.value)}
    />
      <TextField 
      id="demo-helper-text-misaligned-no-helper" 
      label="Officials" 
      onChange={(e) => setOfficial(e.target.value)}
    />
      <TextField
           required
          id="outlined-required"
          label="Description"
          placeholder="Full"
          onChange={(e) => setDescription(e.target.value)}
        />
    </Box>

    <div className="actions">
            <div className="back">
            <Link to="../siteinfo"  style={{textDecoration:"none"}}>
            <button>Cancel</button>
            </Link>
            </div>
            <div className="submit">
            <Link to="../siteinfo"  style={{textDecoration:"none"}}>
            <button onClick={()=>UpdateLocation(address)}>Submit</button>
            </Link>
            </div>
            
      </div>

        </div>
    </div>
  )
}

export default EditSite