import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
// import List from "../../components/table/Table"
import "./siteinfo.scss"
import { Link, useParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login"


import Chip from '@mui/material/Chip';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { deepOrange, green } from '@mui/material/colors';
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import GroupIcon from '@mui/icons-material/Group';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';


import React,{useEffect,useState, useRef} from "react";
import axios, { Axios } from "axios";




function SiteInfo() {



  const { state } = useLocation();
  // const [newName, setNewName] = useState(state ? state.newName : '');
  
  
  
  
 
  const style = {
    width: '100%',
    maxWidth: 500,
    bgcolor: 'background.paper',

  };

  // const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get(`/siteinfo`)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // if(localStorage.getItem('token') === null){
  //   console.log('no token') 
  //   return (
  //     <div>
  //       <Login/>
  //     </div>
  //   ) 
  // }else{
  //   console.log('has token')
  // }

   const [users,setUsers] = useState([]);
   const [rooms,setRooms] = useState([]);
   const [locations,setLocations] = useState([]);

  const[roomName,setRoomName] = useState("");
  const[name,setName] = useState(state ? state.name : '');
  const[totalcap,setTotalCap] = useState('0');
  const[capacity,setCapacity] = useState("");

  
  const[id,setId] = useState(state? state._id:'');
  const[address,setAddress] = useState(state? state.address:'');
  const[restroom,setRestRoom] = useState(state? state.restroom:'');
  const[kitchen,setKitchen] = useState(state? state.kitchen:'');
  const[groundrupture,setGroundRupture] = useState(state? state.groundrupture:'');
  const[flood,setFlood] = useState(state? state.flood:'');

  
  

  

  const [open, setOpen] = React.useState(false);
  
  const [Dialogopen, setDialogOpen] = React.useState(false);
  const [Editopen, setEditOpen] = React.useState(false);

  const status = [
    { label: 'In', },{ label: 'Out', },
  ];

  function handleButton(){
    //pag pinindot ko yung submit
    const data = {
      roomName:roomName,
      name:name,
      totalcap:totalcap,
      capacity:capacity
    }
    
    // dito ma sasave ng database
    axios.post('http://localhost:4000/app/signupRoom',data)
    .then(res => {
      console.log(res)
      setOpen(false);
    }).catch((res) =>{
      console.log(res)
    })
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const openDelete = () => {
    setDialogOpen(true);
  };


  const handleClickOpenEdit = () => {
    setDialogOpen(true);
  };

  const handleCloseEdit = () => {
    setDialogOpen(false);
  };

  const openRoomEdit = () => {
    setDialogOpen(true);
  };

  const closeDelete = () => {
    setDialogOpen(false);
  };
  const deleteAdd=(address) =>{
    const data = {
      address:address           
    }
  }

  const groundRuptureSelect = [
    {
      value: 'Safe',
      label: 'Safe',
    },
    {
      value: 'Prone',
      label: 'Prone',
    },
   
  ];

  const floodSelect = [
    {
      value: 'Low',
      label: 'Low',
    },
    {
      value: 'Moderate',
      label: 'Moderate',
    },
    {
      value: 'High',
      label: 'High',
    },
   
  ];

  


  // const [userss,setUsers] = useState([]);
  useEffect(() => {
      const fetchPosts = async () => {
          axios.post('http://localhost:4000/app/getlocation')
              .then(res => {
                  // console.log(res.data);
                  setLocations(res.data);
              }).catch(err => {
                  console.log(err);
              })
      };
      fetchPosts();
  }, []);







  useEffect(() => {
    const fetchPosts = async () => {
      axios.post('http://localhost:4000/app/getUsers')
        .then(resusers => {
          setUsers(resusers.data);
          // console.log(resusers)
          axios.post('http://localhost:4000/app/getRooms')
            .then(resrooms => {
              setRooms(resrooms.data)
              // console.log(resloc.data)
              // console.log(resusers.data)
              const newArr = []
              if (resrooms.data.length > 0) {
                 
                for (let i = 0; i < resrooms.data.length; i++) {

                  //room na name==jacinto && roomName == 401

                const getCap = resusers.data.filter((tl)=>tl.name === resrooms.data[i].name && tl.roomName === resrooms.data[i].roomName).length
                newArr.push({name:resrooms.data[i].name,roomName:resrooms.data[i].roomName,totalcap:getCap})
                //  console.log(newArr)                         
                } 
                for (let i = 0; i < newArr.length; i++) {
                  axios.post('http://localhost:4000/app/updateRoomTotal',newArr[i])
                     .then(rescap =>{
                    // console.log(rescap)
                    // console.log(resloc.data)
                  }).catch(err =>{
                    console.log(err)
                  })
                }
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchPosts();
  }, []);

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

  const deleteRoom=(roomName) =>{

    const data = {
      name:name,
      roomName: roomName,      
    }
    console.log(data)
    axios.post('http://localhost:4000/app/deleteroom',data)
    .then(res => {
      if(res.data != null){
      setDialogOpen(false);
      }
    }).catch((res) =>{
      console.log(res)
    })
  }




  const [openEditHotline, setOpenEditHotline] = React.useState(false);
  const handleEditOpen = () => {
    setOpenEditHotline(true);
  };

  const handleEditClose = () => {
    setOpenEditHotline(false);
  };

  const handleEditSiteOpen = () => {
    setopenEditSite(true);
  };

  
  const [openEditSite, setopenEditSite] = React.useState(false);
  const handleSiteEditCancel = () =>{
    setopenEditSite(false);
  }

  function checkRoomIsEmpty(rooms) {
    if (rooms.totalcap === '0') {
      return{
      colorRoom:'error',
      isButtonDisabledRoom: false
      }
    } else {
      return{
        colorRoom:'error',
        isButtonDisabledRoom: true
        }
    }
  }

  function updateLocation(){
    const data = {
      id:id,
      name:name,
      address: address,
      restroom: restroom,
      kitchen: kitchen,
      flood: flood,
      groundrupture: groundrupture
    }
    
    axios.post('http://localhost:4000/app/updateLocation',data)
    .then(res => {
      console.log(res)
      setOpenEditHotline(false);
    }).catch((res) =>{
      console.log(res)
    })
    console.log([data])
  }


  //check if the newName is match to the location name then use it as a default value for edit
  const defaultLocation = locations.find(location => location.name === name);
  
  
  

function dividedRoom() {
  const newArr = [];
  // const arrUsers = [];
  rooms.map((rooms) => {
    if (rooms.name === name) {
     //users.name == rooms.name || users.roomName == rooms.roomName
     const { colorRoom, isButtonDisabledRoom } = checkRoomIsEmpty(rooms);
      newArr.push(
        <TableContainer component={Paper} className="table">
        <div style={{display:"flex", paddingTop:"10pt", paddingLeft:"10pt", padding:"10px" , justifyContent:"flex-between"}}>

        <Chip icon={<MeetingRoomIcon />} label={rooms.roomName} style={{alignItems:"center," ,padding:"10pt", fontWeight:"600"}}/>
        &nbsp;
        <Chip icon={<GroupIcon />} label={`${rooms.totalcap} / ${rooms.capacity}`} style={{alignItems:"center," ,padding:"10pt",fontWeight:"600"}}/>
        &nbsp;
        
       <Button variant="contained" size='small'  color={colorRoom} disabled={isButtonDisabledRoom} onClick={openDelete}>Remove</Button>
           
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
                 Are you sure do you want to delete this room? 
                </DialogContentText>
              </DialogContent>
              <DialogActions>

                <Button onClick={closeDelete}>Cancel</Button>
                
                <Button onClick={() =>deleteRoom(rooms.roomName)} autoFocus>Delete</Button>           
              </DialogActions>
            </Dialog>

          </div>
          <Table >  
            <TableHead className="tablehead"  >
              <TableRow className="rowColor">
                <TableCell className="tableCellName">First Name</TableCell>
                <TableCell className="tableCellName">Last Name</TableCell>
                <TableCell className="tableCellName">In/Out</TableCell>
                <TableCell className="tableCellName">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {users.filter(res => res.roomName === rooms.roomName && res.name === rooms.name).map((res) => (
            <TableRow key={res.id}>
              <TableCell className="tableCell">{res.firstName}</TableCell>
              <TableCell className="tableCell">{res.lastName}</TableCell>
              <TableCell className="tableCell">{res.inoutStatus}</TableCell>
              <TableCell className="tableCell">
              <Button variant="contained" size="small" color="error" onClick={() => deleteRes(res.firstName,res.lastName)}>Delete</Button>
              <Button  variant="contained" size="small" onClick={handleEditOpen}>Edit</Button>
              </TableCell>
              <Dialog open={openEditHotline} onClose={handleEditClose}>
              <DialogTitle>Edit Resident</DialogTitle>
              <DialogContent>
                <DialogContentText>
                 Fill out the fields you wish to change.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="firstname"
                  label="First Name"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="lastname"
                  label="Last Name"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="inout"
                  label="In/Out"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button variant="contained" onClick={handleEditClose}>Cancel</Button>
                <Button variant="outlined" onClick={handleEditClose}>Submit</Button>
              </DialogActions>
            </Dialog>
            </TableRow>
            
          ))}
            </TableBody>
          </Table>
        </TableContainer>  
      );
    }
  });
  return newArr;
}



  return (
    
    <div className="siteinfo">
        <Sidebar/>
    <div className="siteinfoContainer">
        <Navbar/>
        <div className="top">
          <div className="left">

          {/* gawin pop up na lang para di mo babaguhin yung mismong page ng edit sa site */}
         <Button  variant="contained" size="small" onClick={handleEditSiteOpen}  className="editButton">Edit</Button>
           {/* Edit forms */}
           {locations.map(location =>
            (<Dialog open={openEditSite} onClose={handleEditClose}>
              <DialogTitle>Edit Evacuation Site Information</DialogTitle>
              <DialogContent>
                <DialogContentText>
                 Fill out the fields you wish to change.
                </DialogContentText>
                <br/>
                
                <div className="editImage" style={{display:'flex', alignItems:'center', paddingBottom:'3pt'}}>
                <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
                  NU
                </Avatar>
                <Button style={{display:'flex', marginLeft:'5pt'}} variant="outlined"  size="medium" component="label">
                  Upload
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                </div>
                
                {/* <TextField
                  autoFocus
                  margin="dense"
                  id="id"
                  label="id"
                  defaultValue={defaultLocation ? defaultLocation._id : ''}
                  fullWidth
                  onChange={(e) => setId(e.target.value)}
                /> */}
              
                <TextField
                  key={location.id}
                  autoFocus
                  margin="dense"
                  id="EvacName"
                  label="Evacuation Site Name"
                  defaultValue={defaultLocation ? defaultLocation.name : ''}
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="EvacAddress"
                  label="Address"
                  defaultValue={defaultLocation ? defaultLocation.address : ''}
                  fullWidth
                  onChange={(e) => setAddress(e.target.value)}
                />
                
                <div> 
                <TextField
                  autoFocus
                  margin="dense"
                  id="restroom"
                  label="Rest Room"
                  defaultValue={defaultLocation ? defaultLocation.restroom : ''}
                  fullWidth
                  onChange={(e) => setRestRoom(e.target.value)}    
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="Kitchens"
                  label="Kitchens"
                  defaultValue={defaultLocation ? defaultLocation.kitchen : ''}
                  fullWidth
                  onChange={(e) => setKitchen(e.target.value)}
                  
                />
                  <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': {  mt: 1,  width: '26.5ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="outlined-select-selection"
                      select
                      label="Ground Rupture"
                      defaultValue={defaultLocation ? defaultLocation.groundrupture : ''}
                      onChange={(e) => setGroundRupture(e.target.value)}
                    >
                      {groundRuptureSelect.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      id="outlined-select-selection"
                      select
                      label="Flood"
                      defaultValue={defaultLocation ? defaultLocation.flood : ''}
                      onChange={(e) => setFlood(e.target.value)}
                    >
                      {floodSelect.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>

                  </div>

                 
                 
                </Box>
                </div>


              </DialogContent>
              <DialogActions>
                <Button variant="contained" onClick={handleSiteEditCancel}>Cancel</Button>
                <Button variant="outlined" onClick={updateLocation} >Submit</Button>
              </DialogActions>
            </Dialog>
            ))}
           
          

            <div className="indi">
              <img src="https://national-u.edu.ph/wp-content/uploads/2021/04/banner-nu-manila.jpg"
               alt="" className="indiImg" />
               <div className="details">
                 <h1 className="indiTitle">{name}</h1>
                 <div className="detailIndi">
                   <span className="infoKey">Address:</span>
                   <span className="infoValue">address</span>
                 </div>
                 <div className="detailIndi">
                   <span className="infoKey">Capacity:</span>
                   <span className="infoValue">500</span>
                 </div>
                 <div className="detailIndi">
                   <span className="infoKey">Rooms:</span>
                   <span className="infoValue">5000</span>
                 </div>
                 <div className="detailIndi">
                   <span className="infoKey">Restrooms:</span>
                   <span className="infoValue">45</span>
                 </div>
                 <div className="detailIndi">
                   <span className="infoKey">Kitchens:</span>
                   <span className="infoValue">10</span>
                 </div>
                 <div className="detailIndi">
                   <span className="infoKey">Emergency Vehicles:</span>
                   <span className="infoValue">Ready</span>
                 </div>
                 <div className="detailIndi">
                   <span className="infoKey">First Aids:</span>
                   <span className="infoValue">Ready</span>
                 </div>
                 <div className="detailIndi">
                   <span className="infoKey">Officials:</span>
                   <span className="infoValue">300</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
        
          <div className="datatableTitle">
          <div style={{paddingLeft:"15pt"}}>
      <Button  onClick={handleClickOpen}   startIcon={<AddIcon/>} variant="contained" disableElevation> 
      Add Room
      </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{fontWeight: 500,}}>ADD ROOMS </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out the form below to add room in the building.
          </DialogContentText>

          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          /> */}
          <TextField
            autoFocus
            margin="dense"
            id="roomName"
            label="Room Name"
            fullWidth
            onChange={(e) => setRoomName(e.target.value)}
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="cap"
            label="Capacity"
            fullWidth
            onChange={(e) => setCapacity(e.target.value)}
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
 
        <div className="bottom">
        <h1 className="title" style={{paddingBottom:"15pt"}}>Admitted Residents</h1>
        <div>
          {dividedRoom()}
       </div>
           {/* {dividedRoom()} */}
            
        </div>
        </div>    
    </div>  
  )
}

export default SiteInfo