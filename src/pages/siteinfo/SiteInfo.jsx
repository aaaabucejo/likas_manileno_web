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
  const[username,setUsername] = useState("");
  const[editResRoom,setEditResRoom] = useState("");
  const[firstName,setFirstName] = useState("");
  const[lastName,setLastName] = useState("");
  const[inoutStatus,setInOutStatus] = useState("");
  

  const[id,setId] = useState(state? state._id:'');
  const[address,setAddress] = useState(state? state.address:'');
  const[restroom,setRestRoom] = useState(state? state.restroom:'');
  const[kitchen,setKitchen] = useState(state? state.kitchen:'');
  const[groundrupture,setGroundRupture] = useState(state? state.groundrupture:'');
  const[flood,setFlood] = useState(state? state.flood:'');

  //for displaying 
  const[newName,setNewName] = useState(state ? state.name : '');
  const[newCapacity,setNewCapacity] = useState(state ? state.capacity : '');
  const[newTotalCap,setNewTotalCap]= useState(state ? state.totalevac : '');
  const[newRoom,setNewRoom] = useState(state ? state.room : '');

  const[selectedRoom,setSelectedRoom] = useState("");
  const[selectedAddResRoom,setSelectedAddResRoom] = useState("");
  
  
  

  const [userNameChecker, setUserNameChecker] = React.useState(false);
  const [userHasRoom, setUserHasRoom] = React.useState(false);
  const [fullRoom, setFullRoom] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  
  const [Dialogopen, setDialogOpen] = React.useState(false);
  const [Editopen, setEditOpen] = React.useState(false);
  const [addResidentDialog, setAddResidentDialog] = React.useState(false);
  const [userNotExist, setUserNotExist] = React.useState(false);
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
    axios.post('https://likasmanileno-api.onrender.com/app/signupRoom',data)
    .then(res => {
      console.log(res)
      setOpen(false);
      window.location.reload();
    }).catch((res) =>{
      console.log(res)
    })
  }

  const handleClose = () => {
    setOpen(false);
    setAddResidentDialog(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };


  //remove room ito
  const openDelete = (_id,roomName) => {
    setDialogOpen(true);
    setSelectedRoom({_id,roomName})
  };

  const openAddResidentDialog = (roomName) => {
    setAddResidentDialog(true);
    setSelectedAddResRoom(roomName)
  };

  function addResBtnDisable(){
    if(
      username == '' 
     ){
      return true
      
    }else{
      return false
    }
  }


  const addResManual=() =>{

    const data = {
      username: username,
      roomName: selectedAddResRoom
      
    }
    // console.log(data)
    const foundUser = users.find(user => user.username === data.username && user.roomName === "Removed");
    
    const userHasRoom = users.find(user => user.username === data.username && user.roomName != "Removed")
    if (!users.some(user => user.username === data.username)) {
      setUserNameChecker(true)
      setUserNotExist(true)
    } else if (userHasRoom) {
      setUserNameChecker(true);
      setUserHasRoom(true)

    } else {
      // console.log(data)
      axios.post('https://likasmanileno-api.onrender.com/app/addUsersToRoom',data)
    .then(res => {
      console.log(res)
    }).catch((res) =>{
      console.log(res)
    })
 
     
    }
  };

  function fullRoomChecker(rooms){
    if(rooms.totalcap == rooms.capacity){
      return {
        fullRoom:'primary',
        isButtonDisabledFullRoom: true
      }
    }else{
      return {
        fullRoom:'primary',
        isButtonDisabledFullRoom: false
      }
    }
  }


  // const handleCloseEdit = () => {
  //   setDialogOpen(false);
  // };

  // const openRoomEdit = () => {
  //   setDialogOpen(true);
  // };

  // const deleteAdd=(address) =>{
  //   const data = {
  //     address:address           
  //   }
  // }

  
  const closeDelete = () => {
    setDialogOpen(false);
    setAddResidentDialog(false);
  };
  

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

  const InoutSelect = [
    {
      value: 'In',
      label: 'In',
    },
    {
      value: 'Out',
      label: 'Out',
    }
  ]

                // addResToRoom({id:user.id,email:user.email,roomName:user.roomName})
                  // console.log(addResToRoom)
                  // addResToRoom.push({ id: user._id, username: user.username, roomName: user.roomName });
// const usersWithEmptyName = resusers.data.filter(user => user.roomName === '');

  // const [userss,setUsers] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const resloc = await axios.get('https://likasmanileno-api.onrender.com/app/getLocation');
        setLocations(resloc.data);
  
        const resusers = await axios.get('https://likasmanileno-api.onrender.com/app/getUsers');
        const resrooms = await axios.get('https://likasmanileno-api.onrender.com/app/getRooms');
  
        const capCounter = [];
        const roomCounter = [];
        const addResToRoom = [];
        const removeExtraRes = [];
  
        let selectedRoom = null;
        const usersWithEmptyName = resusers.data.filter(user => user.roomName === '');
        resrooms.data.forEach(room => {
          if (room.name === newName && room.totalcap < room.capacity) {
            if (!selectedRoom) {
              selectedRoom = room;
            }
          }
        });
  
        if (selectedRoom) {
          const addAllRes = resusers.data.filter(user => user.roomName === '' || user.roomName === selectedRoom.roomName);
          const availableSlot = selectedRoom.capacity - selectedRoom.totalcap;
  
          if (availableSlot !== 0) {
            const unnamedUsers = addAllRes.filter(user => user.roomName === '');
            const usersToAdd = Math.min(unnamedUsers.length, availableSlot);
  
            for (let i = 0; i < usersToAdd; i++) {
              addResToRoom.push({
                id: unnamedUsers[i]._id,
                username: unnamedUsers[i].username,
                roomName: selectedRoom.roomName
              });
            }
          }
        }
  
        if (resloc.data.length > 0) {
          resloc.data.forEach(loc => {
            let totalCapacity = 0;
            let totalRoom = 0;
  
            resrooms.data.forEach(room => {
              if (room.name === loc.name) {
                totalCapacity += parseInt(room.capacity, 10);
                totalRoom++;
              }
            });
  
            capCounter.push({ name: loc.name, capacity: totalCapacity });
            roomCounter.push({ name: loc.name, room: totalRoom });
          });
        }
        for(let i = 0; i < capCounter.length; i++){
        axios.post('https://likasmanileno-api.onrender.com/app/updateLocationCapacity',capCounter[i])
          .then(rescap=>{
          //  console.log(capCounter)
          //  window.location.reload();
          });
        }
  
        for (let i = 0; i < addResToRoom.length; i++) {
          await axios.post('https://likasmanileno-api.onrender.com/app/addToRoom', addResToRoom[i]);
        }
  
        for (let i = 0; i < roomCounter.length; i++) {
          await axios.post('https://likasmanileno-api.onrender.com/app/updateRoomCount', roomCounter[i]);
        }
  
        const newArr = [];
  
        if (resloc.data.length > 0) {
          for (let i = 0; i < resloc.data.length; i++) {
            const getCap = resusers.data.filter(tl => tl.name === resloc.data[i].name).length;
            newArr.push({ name: resloc.data[i].name, totalevac: getCap });
          }
  
          for (let i = 0; i < newArr.length; i++) {
            await axios.post('https://likasmanileno-api.onrender.com/app/updateLocationTotal', newArr[i]);
            
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchPosts();
  }, []);







  useEffect(() => {
    const fetchPosts = async () => {
      axios.get('https://likasmanileno-api.onrender.com/app/getUsers')
        .then(resusers => {
          setUsers(resusers.data);
          // console.log(resusers.data.name)
          axios.get('https://likasmanileno-api.onrender.com/app/getRooms')
            .then(resrooms => {
              setRooms(resrooms.data)
              // console.log(resloc.data)
              // console.log(resusers.data)
              const newArr = []
              if (resrooms.data.length > 0) {
                 
                for (let i = 0; i < resrooms.data.length; i++) {
                const getCap = resusers.data.filter((tl)=>tl.name === resrooms.data[i].name && tl.roomName === resrooms.data[i].roomName).length
                newArr.push({name:resrooms.data[i].name,roomName:resrooms.data[i].roomName,totalcap:getCap})
                //  console.log(newArr)                         
                } 
                for (let i = 0; i < newArr.length; i++) {
                  axios.post('https://likasmanileno-api.onrender.com/app/updateRoomTotal',newArr[i])
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

  const removeRes = (_id, firstName) => {
   
    axios.get(`https://likasmanileno-api.onrender.com/app/updateUsers?_id=${_id}&firstName=${firstName}&roomName=Removed`)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const deleteRoom=() =>{

    console.log(selectedRoom)
    axios.post('https://likasmanileno-api.onrender.com/app/deleteroom',selectedRoom)
    .then(res => {
      
      setDialogOpen(false);
      console.log(selectedRoom)
      window.location.reload();
      
      
    }).catch((res) =>{
      console.log(res)
    })
  }




  const [openEditHotline, setOpenEditHotline] = React.useState(false);
  const handleEditOpen = (id) => {
    setEditResRoom(id)
    setOpenEditHotline(true);
  };

  const handleEditSubmit = () => {
    const queryParams = `?_id=${editResRoom}&firstName=${firstName || (editRes && editRes.firstName) || ''}&lastName=${lastName || (editRes && editRes.lastName) || ''}&inoutStatus=${inoutStatus || (editRes && editRes.inoutStatus) || ''}`;
    axios.get(`https://likasmanileno-api.onrender.com/app/editUsers${queryParams}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
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
    console.log(data)
    setNewName(name)
    console.log(newName)
    axios.post('https://likasmanileno-api.onrender.com/app/updateLocation',data)
    
    .then(res => {
      console.log(res)
      setOpenEditHotline(false);
      // window.location.reload();
    }).catch((res) =>{
      console.log(res)
    })
   
  }


  //check if the newName is match to the location name then use it as a default value for edit
  const defaultLocation = locations.find(location => location.name === name);
  const editRes = users.find(users=> users._id === editResRoom);
  // console.log(editRes)
  
  // console.log(editRes)
  // console.log('this is the selected edit',editResRoom)
  // console.log(users.id)
  // console.log(locations.name)
  
  
  

function dividedRoom() {
  const newArr = [];
  // const arrUsers = [];
  rooms.map((rooms) => {
    if (rooms.name === newName) {
     //users.name == rooms.name || users.roomName == rooms.roomName
     const { colorRoom, isButtonDisabledRoom } = checkRoomIsEmpty(rooms);
     const { fullRoom, isButtonDisabledFullRoom } = fullRoomChecker(rooms);
      newArr.push(
        <TableContainer component={Paper} className="table">
        <div style={{display:"flex", paddingTop:"10pt", paddingLeft:"10pt", padding:"10px" , justifyContent:"flex-between"}}>

        <Chip icon={<MeetingRoomIcon />} label={rooms.roomName} style={{alignItems:"center," ,padding:"10pt", fontWeight:"600"}}/>
        &nbsp;
        <Chip icon={<GroupIcon />} label={`${rooms.totalcap} / ${rooms.capacity}`} style={{alignItems:"center," ,padding:"10pt",fontWeight:"600"}}/>
        &nbsp;
        
       <Button variant="contained" size='small'  color={colorRoom} disabled={isButtonDisabledRoom} onClick={() =>openDelete(rooms._id,rooms.roomName)}>Remove</Button>
       &nbsp;&nbsp;
       <Button variant="contained" size='small'  color={fullRoom} disabled={isButtonDisabledFullRoom} onClick={()=>openAddResidentDialog(rooms.roomName)}>Add Resident</Button>
           
       <Dialog
              open={Dialogopen}
              onClose={closeDelete}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              BackdropProps={{
                style: {
                  backgroundColor: 'rgba(0, 0, 0, 0.15)', // Adjust the last value (0.5) to change the opacity
                },
              }}
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
                
                <Button onClick={deleteRoom} autoFocus>Delete</Button>           
              </DialogActions>
            </Dialog>

            <Dialog
              open={addResidentDialog}
              onClose={closeDelete}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              BackdropProps={{
                style: {
                  backgroundColor: 'rgba(0, 0, 0, 0.20)', // Adjust the last value (0.5) to change the opacity
                },
              }}
            >
              <DialogTitle id="alert-dialog-title">
                {`Add resident in ${selectedAddResRoom}`}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  
                <TextField
                  autoFocus
                  error = {userNameChecker}
                  margin="dense"
                  id="username"
                  label={userNotExist? 'Username does not exist': userHasRoom? 'The user has a room already.':'Username'}
                  fullWidth
                  onChange={(e) => setUsername(e.target.value)}
                />
                 
                
                </DialogContentText>
              </DialogContent>
              <DialogActions>

                <Button onClick={handleClose} variant="contained">Cancel</Button>
                
                <Button disabled={addResBtnDisable()} onClick={addResManual}  variant="outlined">ADD</Button>
          
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
              <Button variant="contained" size="small" color="error" onClick={() => removeRes(res._id,res.firstName)}>Delete</Button>
              <Button  variant="contained" size="small" onClick={()=>handleEditOpen(res._id)}>Edit</Button>
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
                  defaultValue={editRes? editRes.firstName: ''}
                  onChange={(e) => setFirstName(e.target.value)}
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="lastname"
                  label="Last Name"
                  defaultValue={editRes? editRes.lastName: ''}
                  onChange={(e) => setLastName(e.target.value)}
                  fullWidth
                />
                <div>
                <TextField
                      id="outlined-select-selection"
                      select
                      label="In/Out"
                      defaultValue={editRes ? editRes.inoutStatus : ''}
                      onChange={(e) => setInOutStatus(e.target.value)}
                      fullWidth
                    >
                      {InoutSelect.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                </div>
              </DialogContent>
              <DialogActions>
                <Button variant="contained" onClick={handleEditClose}>Cancel</Button>
                <Button variant="outlined" onClick={handleEditSubmit}>Submit</Button>
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
           

           <div>
  {locations.map(location => {
    if (location.name === newName) {
      return (
        <div className="indi" key={location.id}>
          <img
            src="https://national-u.edu.ph/wp-content/uploads/2021/04/banner-nu-manila.jpg"
            alt=""
            className="indiImg"
          />
          <div className="details">
            <h1 className="indiTitle">{newName}</h1>
            <div className="detailIndi">
              <span className="infoKey">Address:</span>
              <span className="infoValue">{location.address}</span>
            </div>
            <div className="detailIndi">
              <span className="infoKey">Residents:</span>
              <span className="infoValue">{location.totalevac}</span>
            </div>
            <div className="detailIndi">
              <span className="infoKey">Capacity:</span>
              <span className="infoValue">{location.capacity}</span>
            </div>
            <div className="detailIndi">
              <span className="infoKey">Rooms:</span>
              <span className="infoValue">{location.room}</span>
            </div>
            <div className="detailIndi">
              <span className="infoKey">Restroom:</span>
              <span className="infoValue">{location.restroom}</span>
            </div>
            <div className="detailIndi">
              <span className="infoKey">Kitchen:</span>
              <span className="infoValue">{location.kitchen}</span>
            </div>
            <div className="detailIndi">
              <span className="infoKey">Flood:</span>
              <span className="infoValue">{location.flood}</span>
            </div>
            <div className="detailIndi">
              <span className="infoKey">Ground Rupture:</span>
              <span className="infoValue">{location.groundrupture}</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  })}
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