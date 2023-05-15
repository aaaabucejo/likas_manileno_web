import React,{useEffect,useState} from "react";
import axios, { Axios } from "axios";
import "./datatable.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from "leaflet";
import { Link } from "react-router-dom";
import moment from 'moment';
import AddIcon from '@mui/icons-material/Add';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';

import HeatMap from '../heatmap/HeatMap';
import SearchBar from "../searchbar/SearchBar";



function DeleteDialog (){
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

}


function List() {
   
  const[firstName,setFirstName] = useState("");
  const[lastName,setLastName] = useState("");
  const[contactNo,setContactNo] = useState("");
  const[name,setName] = useState("");
  const[address,setAddress] = useState("");
  const[latitude,setLatitude] = useState("");
  const[longtitude,setLongtitude] = useState("");
  const[age,setAge] = useState("");
  const[status,setStatus] = useState("");
  //
  const[username,setUsername] = useState("");
  const[password,setPassword] = useState("");
  const[roomName,setRoomName] = useState("");
  const[inoutStatus,setInOutStatus] = useState("");
  
  const [open, setOpen] = React.useState(false);
  const [Dialogopen, setDialogOpen] = React.useState(false);

  function handleButton(){
    //pag pinindot ko yung submit
    const data = {
      firstName: firstName,
      lastName: lastName,
      contactNo: contactNo,
      name: name,
      address:address,
      latitude,latitude,
      longtitude,longtitude,
      age: age,
      status:status,
      username: username,
      password: password,
      roomName:roomName,
      inoutStatus:inoutStatus
    }
    
    //dito ma sasave ng database
    axios.post('http://localhost:4000/app/signup',data)
    .then(res => {
      console.log(res)
      setOpen(false);
    }).catch((res) =>{
      console.log(res)
    })
  }

  const openDelete = () => {
    setDialogOpen(true);
  };

  const closeDelete = () => {
    setDialogOpen(false);
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const viewPin = (latitude,longtitude) => {
    const data = [
      latitude,
      longtitude
    ]
    console.log(data)
  };

  const [users,setUser] = useState([]);
  useEffect(() => {
      const fetchPosts = async () => {
          axios.post('http://localhost:4000/app/getUsers')
              .then(res => {
                  // console.log(res);
                  setUser(res.data);
              }).catch(err => {
                  console.log(err);
              })
      };
      fetchPosts();
  }, []);

  //get first and lastname
  const deleteRes=(firstName, lastName) =>{

    const data = {
      firstName: firstName,
      lastName: lastName,      
    }
    console.log(data)
    axios.post('http://localhost:4000/app/deleteresident',data)
    .then(res => {
      if(res.data != null){
      setDialogOpen(false);
      }
    }).catch((res) =>{
      console.log(res)
    })
  
  }
 //get color  
  const getColor = (status) => {
      if(status == 'Arriving'){
        return '#0080ff'
      }else if(status =='Evacuated'){
        return '#32CD32'
      }else if(status == 'Forced'){
        return '#FF5733'
      }  
  };

  const zoom = 13;
  const regionCoord = [14.6043, 120.9946];
  const [map, setMap] = useState(null);

  function FlyToButton() {
    const onClick = () => {
      map.flyTo(regionCoord, zoom);
      console.log(map);
    };

    return <button onClick={onClick}>Add marker on click</button>;
  }
  
  return (
    
    <div className="datatable">
      <HeatMap/>
      
    <div className="datatableTitle">
      Evacuees
      <Button onClick={handleClickOpen}   startIcon={<AddIcon/>} variant="contained" disableElevation> 
      Add EVACUEE
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{fontWeight: 500,}}>ADD EVACUEE</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out the form below to add an resident account that lives on your vacinity.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            fullWidth
            onChange={(e) => setFirstName(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            fullWidth
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="ContactNo"
            label="ContactNo"
            fullWidth
            onChange={(e) => setContactNo(e.target.value)}
          />
             <TextField
            autoFocus
            maxlength='11'
            margin="dense"
            id="name"
            label="Site Transfer"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            maxlength='11'
            margin="dense"
            id="Address"
            label="Address"
            fullWidth
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            autoFocus
            maxlength='11'
            margin="dense"
            id="latitude"
            label="Latitude"
            fullWidth
            onChange={(e) => setLatitude(e.target.value)}
          />
          <TextField
            autoFocus
            maxlength='11'
            margin="dense"
            id="longtitude"
            label="Longtitude"
            fullWidth
            onChange={(e) => setLongtitude(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="age"
            label="Age"
            Width='15'
            onChange={(e) => setAge(e.target.value)}
          />

          <div className="radioButton">
          <FormLabel 
          id="demo-row-radio-buttons-group-label"
           >Status</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Arriving" control={<Radio />} onChange={(e) => setStatus(e.target.value)} label="Arriving" />
            <FormControlLabel value="Evacuated" control={<Radio />} onChange={(e) => setStatus(e.target.value)} label="Evacuated" />
            <FormControlLabel value="Forced" control={<Radio />} onChange={(e) => setStatus(e.target.value)} label="Forced" />
          </RadioGroup>
          </div>

           <TextField
            autoFocus
            margin="dense"
            id="userName"
            label="Username"
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="passWord"
            label="Password"
            type="password"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="confirmPassWord"
            label="Confirm password"
            type="password"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="roomname"
            label="Room Name"
            fullWidth
            onChange={(e) => setRoomName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="inOut"
            label="In/out"
            fullWidth
            onChange={(e) => setInOutStatus(e.target.value)}
          />
        
        </DialogContent>
        <DialogActions>
        <Stack  direction="row" spacing={2}>
        <Button onClick={handleClose} variant="contained">Cancel</Button>
      <Button onClick={handleButton}  variant="outlined">Add</Button>
        </Stack>
        
        </DialogActions>
      </Dialog>

    </div>
    
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow className="rowColor">
          {/* <TableCell className="tableCell">ID No.</TableCell> */}
          <TableCell className="tableCellName" align="center">First Name</TableCell>
          <TableCell className="tableCellName" align="center">Last Name</TableCell>
          <TableCell className="tableCellName" align="center">Contact No.</TableCell>
          <TableCell className="tableCellName" align="center">Date Admitted</TableCell>
          <TableCell className="tableCellName" align="center">Site Transfered</TableCell>
          <TableCell className="tableCellName" align="center">Address</TableCell>
          <TableCell className="tableCellName" align="center">Age</TableCell>
          <TableCell className="tableCellName" align="center">Status</TableCell>
          <TableCell className="tableCellName" align="center">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((res) => (
          <TableRow key={res.id}>
            {/* <TableCell>{res._id}</TableCell> */}
            <TableCell className="tableCell" align="center">{res.firstName}</TableCell>
            <TableCell  className="tableCell" align="center">{res.lastName}</TableCell>
            <TableCell  className="tableCell" align="center">{res.contactNo}</TableCell>
            <TableCell  className="tableCell" align="center">{moment(res.dateAdmitted).format('lll')}</TableCell>
            <TableCell  className="tableCell" align="center">{res.name}</TableCell>
            <TableCell  className="tableCell" align="center">{res.address}</TableCell>
            <TableCell  className="tableCell" align="center"><span className={`status ${res.age}`}>{res.age}</span></TableCell>            
            <TableCell  className="tableCell" align="center"> <button style={{backgroundColor:`${getColor(res.status)}`, color:'#ffff', fontWeight:'500', border:'none', borderRadius:'4pt', fontSize:'10pt'}} >{res.status}</button></TableCell>
            
            <TableCell align="center" className="tableCell">
            <Button align="center" variant="contained" size="small"  onClick={() =>viewPin(res.latitude,res.longtitude)}>View</Button>
            &nbsp; &nbsp; 
            <Button align="center" variant="contained" color="error" size='small' onClick={openDelete}>Delete</Button>
            <Dialog
              open={Dialogopen}
              onClose={closeDelete}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Delete this user?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                 Are you sure do you want to delete this? 
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={closeDelete}>Cancel</Button>
                <Button onClick={() =>deleteRes(res.firstName, res.lastName)} autoFocus>Delete</Button>
              </DialogActions>
            </Dialog>
            </TableCell> 
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  
  )
}

export default List