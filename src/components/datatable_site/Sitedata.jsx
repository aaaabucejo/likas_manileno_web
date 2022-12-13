import './sitedata.scss';
// import * as React from 'react';
import { Link } from "react-router-dom";
import React,{useEffect,useState, useRef} from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L, { latLngBounds, map } from "leaflet";
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import HeatMap from '../heatmap/HeatMap';
import Polyline from '../polyline/PolyLine';
import AddIcon from '@mui/icons-material/Add';

//search bar
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { width } from '@mui/system';
import SearchBar from '../searchbar/SearchBar';
import Divider from "@material-ui/core/Divider";
import OutlinedInput from "@material-ui/core/OutlinedInput";
// import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { ButtonBase } from '@mui/material';
import { PlusOne } from '@mui/icons-material';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// const icon = L.icon({
//   iconUrl:'./pin.png',
//   iconSize:[38, 38]
// });

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

function Sitedata(props) {

  //snackbar
  const [openSnack, setOpenSnack] = React.useState(false);

  const handleAddSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };


    //for search
    const [searchText, setSearchText] = useState("");
    const [listPlace, setListPlace] = useState([]);
    //add location
    const[name,setName] = useState("");
    const[address,setAddress] = useState("");
    const[latitude,setLatitude]=useState("");
    const[longtitude,setLongtitude]=useState("");
    const[totalevac,setTotalEvac]=useState("");
    const[capacity,setCapacity] = useState("");
    const[room,setRoom] = useState("");
    const[restroom,setRestRoom] = useState("");
    const[kitchen,setKitchen] = useState("");
    const[flood,setFlood] = useState("");
    const[groundrupture,setGroundRupture] = useState("");
    const[Dialogopen, setDialogOpen] = React.useState(false);
    //database
    const [locations,setLocations] = useState([]);
    const [users,setUser] = useState([]);

      //get data locations
      useEffect(() => {
        const fetchPosts = async () => {
          axios.post('http://localhost:4000/app/getlocation')
              .then(res => {
                  setLocations(res.data); 
              }).catch(err => {
                  console.log(err);
              })
            };
            fetchPosts();
          }, []);
    //get data users
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


          //users.siteT == locations.name
          
          //  => insert sa totalEvac

          // show total count


    //pag pinindot ko yung submit
    function handleButton(){ 
      const data = {
        name: name,
        address: address,
        latitude: latitude,
        longtitude: longtitude,
        capacity: capacity,
        room: room,
        restroom: restroom,
        kitchen: kitchen,
        flood: flood,
        groundrupture: groundrupture
      }
      //dito ma sasave ng database
      axios.post('http://localhost:4000/app/signuplocation',data)
      .then(res => {
        console.log(res.data)
        setOpen(false);
      }).catch(err =>{
        console.log(err)
        
      })
    }

  // modal function
  const [open, setOpen] = React.useState(false);
  
  function View(latitude,longtitude){
    const data = {
      latitude,
      longtitude
    }
   map.setView(data)
    
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

  // void countTotalEvac(){
  //   users
  // };

  

  //get address 
  const deleteAdd=(address) =>{
    const data = {
      address:address           
    }
    
    //console.log(data)
    axios.post('http://localhost:4000/app/deletelocation',data)
    .then(res => {
      if(res.data != null){
        // alert("deleted")
        setDialogOpen(false);
      }
    }).catch((res) =>{
      console.log(res)
    })
  }

 

  return (
    <div className='sitedata'>
    {/* <SearchBar/> */}
     <Polyline/>
         <div className="datatableTitle">
      Evacuation Sites

      <div style={{display:"flex"}}>
      <Link to="../sites/rooms" style={{color:"#fff", textDecoration:"none"}}>
      {/* <Button startIcon={<InfoIcon/>}  variant="contained" disableElevation>
        VIEW DETAILS
      </Button> */}
      </Link>
      <div style={{paddingLeft:"5pt"}}>
      <Button onClick={handleClickOpen}  startIcon={<AddIcon/>} variant="contained" disableElevation> 
      Add Site
      </Button>
      </div>
      </div>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle style={{fontWeight: 500,}}>ADD EVACAUATION SITE </DialogTitle>
        <DialogContent >
          <DialogContentText>
            Fill out the form below with the exact Inofrmation of the Evacuation Site.
          </DialogContentText>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            onChange={(e) => setName(e.target.value)}
            style={{paddingBottom:"6pt"}}
          />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1,}}>
          <OutlinedInput
          placeholder='Search Address'
            style={{ width: "100%" }}
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", padding: "0px 20px" }}
        >
        <Button>
          <SearchIcon
            size="small"
            variant="contained"
            color="primary"
            onClick={() => {
              // Search
              const params = {
                q: searchText,
                format: "json",
                addressdetails: 1,
                polygon_geojson: 0,
              };
              const queryString = new URLSearchParams(params).toString();
              const requestOptions = {
                method: "GET",
                redirect: "follow",
              };
              fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                  // console.log(JSON.parse(result));
                  setListPlace(JSON.parse(result));
                })
                .catch((err) => console.log("err: ", err));
            }}
          >
          </SearchIcon>
          </Button>
        </div>
      </div>
      <div>
        <List component="nav" aria-label="main mailbox folders">
        {/* list ng baba sa search */}
          {listPlace.map((item) => {
            return (
              <div key={item?.place_id} >
                <ListItem
                  button
                  onClick={() => {
                    // setSelectPosition(item);
                    // console.log(item.lat,item.lon)
                    setLatitude(item.lat)
                    setLongtitude(item.lon)
                    setAddress(item.display_name)
                    // console.log(item)
                  }}
                >
                  <ListItemIcon>
                    <img
                      src="./pin.png"
                      alt="Placeholder"
                      style={{ width: 30, height: 30 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </div>
    </div>  
    <div >
    {/* search */}
            <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            value={address}
            fullWidth
            />
          <TextField
            autoFocus
            margin="dense"
            id="latitude"
            label="latitude"
            // defaultValue="latitude"
            fullWidth
            value={latitude}  
            style={{paddingBottom:"6pt"}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="longtitude"
            label="longtitude"
            // defaultValue="longtitude"
            fullWidth
            value={longtitude}
            
            style={{paddingBottom:"6pt"}}
          />
        </div>
        
          <TextField
            autoFocus
            margin="dense"
            id="capacity"
            label="Capacity"
            type="number"
            Width='15'
            onChange={(e) => setCapacity(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <TextField
            autoFocus
            margin="dense"
            id="rooms"
            label="Rooms"
            type="number"
            Width='15'
            onChange={(e) => setRoom(e.target.value)}
          />
            <TextField
            autoFocus
            margin="dense"
            id="restRooms"
            label="Rest Rooms"
            type="number"
            Width='15'
            onChange={(e) => setRestRoom(e.target.value)}
          />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <TextField
            autoFocus
            margin="dense"
            id="kitchen"
            label="Kitchens"
            type="number"
            Width='15'
            onChange={(e) => setKitchen(e.target.value)}
          />
         
         <div className="radioButton" style={{paddingTop:"8pt"}}>
          <FormLabel 
          id="demo-row-radio-buttons-group-label"
           >Flood</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Low" control={<Radio />} onChange={(e) => setFlood(e.target.value)} label="Low" />
            <FormControlLabel value="Moderate" control={<Radio />} onChange={(e) => setFlood(e.target.value)} label="Moderate" />
            <FormControlLabel value="High" control={<Radio />} onChange={(e) => setFlood(e.target.value)} label="High" />
          </RadioGroup>
          </div>

          <div className="radioButton" style={{paddingTop:"8pt"}}>
          <FormLabel 
          id="demo-row-radio-buttons-group-label"
           >Ground Rupture</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="Safe" control={<Radio />} onChange={(e) => setGroundRupture(e.target.value)} label="safe" />
            <FormControlLabel value="Prone" control={<Radio />} onChange={(e) => setGroundRupture(e.target.value)} label="prone" />

          </RadioGroup>
          </div>

          
        
        </DialogContent>
        <DialogActions>
        <Stack  direction="row" spacing={2}>
        <Button onClick={handleClose} variant="contained">Cancel</Button>
      {/* <Button onClick={handleButton}  variant="outlined">Add</Button>      */}
       <Button onClick={handleAddSnack}  variant="outlined">Add</Button>
      <Snackbar open={openSnack} autoHideDuration={4000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
          Evacuation Site Added
        </Alert>
        </Snackbar>

        </Stack>
        </DialogActions>
      </Dialog>
    </div>
    
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow className="rowColor">
          {/* <TableCell className="tableCell">ID No.</TableCell> */}
          <TableCell className="tableCellName">Name</TableCell>
          <TableCell className="tableCellName">Address</TableCell>
          <TableCell className="tableCellName">Residents</TableCell>
          <TableCell className="tableCellName">Capacity</TableCell>
          <TableCell className="tableCellName">Rooms</TableCell>
          <TableCell className="tableCellName">Restrooms</TableCell>
          <TableCell className="tableCellName">Kitchen</TableCell>
          <TableCell className="tableCellName">Flood</TableCell>
          <TableCell className="tableCellName">Ground Rupture</TableCell>
          <TableCell className="tableCellName">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {locations.map(res => (
          <TableRow key={res.id}>
            {/* <TableCell>{res._id}</TableCell> */}
            <TableCell className="tableCell">{res.name}</TableCell>
            <TableCell className="tableCell">{res.address}</TableCell>
            <TableCell className="tableCell">{res.totalevac}</TableCell>
            <TableCell  className="tableCell">{res.capacity}</TableCell>
            <TableCell  className="tableCell">{res.room}</TableCell>
            <TableCell  className="tableCell">{res.restroom}</TableCell>
            <TableCell  className="tableCell">{res.kitchen}</TableCell>
            <TableCell  className="tableCell">{res.flood}</TableCell>
            <TableCell  className="tableCell">{res.groundrupture}</TableCell>
            
            
            {/* <TableCell  className="tableCell">{res.username}</TableCell>
            <TableCell  className="tableCell">{res.password}</TableCell> */}
           
            <TableCell className="tableCell">
            {/* <Link to="/sites/siteinfo" style={{textDecoration:"none"}}>
            <button>View</button>
            </Link> */}
            <button onClick={() =>View(res.latitude,res.longtitude)}>view</button>
            <button onClick={openDelete}>Delete</button>
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
                {/* <Button onClick={closeDelete} autoFocus> */}
                <Button onClick={() =>deleteAdd(res.address)} autoFocus>Delete</Button>           
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
{/* <button onClick={() =>deleteAdd(res.address)}>Delete</button> */}
export default Sitedata