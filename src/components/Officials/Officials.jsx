// import * as React from 'react';
import React,{useEffect,useState} from "react";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import "./officials.scss"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function Officials() {
  const [open, setOpen] = React.useState(false);
  const[userName,setUserName] = useState("");
  const[passWord,setPassWord] = useState("");
  const[firstName,setFirstName] = useState("");
  const[lastName,setLastName] = useState("");
  const[address,setAddress] = useState("");
  const[email,setEmail] = useState("");
  const[contact,setContact] = useState("");
  const[age,setAge] = useState("");
  const [Dialogopen, setDialogOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  
   // Snackbar
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
   // snackbar

  function handleButton(){

    //pag pinindot ko yung submit
    const data = {
      userName: userName,
      passWord: passWord,
      firstName: firstName,
      lastName: lastName,
      address:address,
      email:email,
      contact:contact,
      age:age
    }
    
    //dito ma sasave ng database
    axios.post('https://likasmanileno-api.onrender.com/app/signupofficials',data)
    .then(res => {
      // console.log(res)
      setOpen(false);
    }).catch((res) =>{
      console.log(res)
    })
  }

  const [users,setUser] = useState([]);
  useEffect(() => {
      const fetchPosts = async () => {
          axios.post('https://likasmanileno-api.onrender.com/app/getofficials')
              .then(res => {
                  // console.log(res);
                  setUser(res.data);
              }).catch(err => {
                  console.log(err);
              })
      };
      fetchPosts();
  }, []);

  const deleteAdd=(email) =>{
    
    const data = {
      email:email         
    }
    console.log(data)
    axios.post('https://likasmanileno-api.onrender.com/app/deleteofficials',data)
    .then(res => {
      if(res.data != null){
        setDialogOpen(false);
      }
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



  const handleClose = () => {
    setOpen(false);
  };

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditCancel = () =>{
    setOpenEdit(false);
  }

  const handleEditClose = () => {
    const data = {
      firstName:firstName,
      lastName: lastName,
      email:email,
      contact:contact
    }
    console.log(data)
    axios.post('https://likasmanileno-api.onrender.com/app/updateofficials',data)
    .then(res => {
      console.log(res)
      // setOpenEditHotline(false);
    }).catch((res) =>{
      console.log(res)
    })
 
  };

  

  return (
    <div className='officialtable'>
    <div className='datatableTitle'>
    Officials
    {/* <Button onClick={handleClickOpen}   startIcon={<AddIcon/>} variant="contained" disableElevation> 
      Add Admin
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{fontWeight: 500,}}>ADD ADMIN ACCOUNT </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To make an account for your officials, please fill out the form below.
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
            id="age"
            label="Age"
            Width='5'
            onChange={(e) => setAge(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <TextField
            autoFocus
            style={{maxlength: 11,}}
            margin="dense"
            id="contact"
            label="Contact#"
            Width='15'
            maxlength='11'
            onChange={(e) => setContact(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="address"
            fullWidth
            onChange={(e) => setAddress(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="username"
            fullWidth
            onChange={(e) => setUserName(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={(e) => setPassWord(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="confirmPass"
            label="Confirm Password"
            type="password"
            fullWidth
          />
        
        </DialogContent>
        
        <DialogActions>
        <Stack  direction="row" spacing={2}>
        <Button onClick={handleClose} variant="contained">Cancel</Button>
        {/* <Button onClick={handleButton}  variant="outlined">Add</Button> */}
        <Button onClick={handleAddSnack}  variant="outlined">Add</Button>
      <Snackbar open={openSnack} autoHideDuration={4000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
         New Admin Account Created
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
          <TableCell className="tableCellName" align="center">Email</TableCell>
          <TableCell className="tableCellName" align="center">First Name</TableCell>
          {/* <TableCell className="tableCellName">Address</TableCell> */}
          <TableCell className="tableCellName" align="center">Last Name</TableCell>
          <TableCell className="tableCellName" align="center">Contact#</TableCell>
          <TableCell className="tableCellName" align="center">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map(res => (
          <TableRow key={res.id}>
            {/* <TableCell>{res._id}</TableCell> */}
            <TableCell className="tableCell" align="center">{res.email}</TableCell>
            <TableCell  className="tableCell" align="center">{res.firstName}</TableCell>
            {/* <TableCell  className="tableCell">{res.address}</TableCell> */}
            <TableCell  className="tableCell" align="center">{res.lastName}</TableCell>
            <TableCell  className="tableCell" align="center">{res.contact}</TableCell>
            <TableCell  className="tableCell" align="center"><span className={`status ${res.status}`}>{res.status}</span>
            <Button variant="contained" size="small"   onClick={handleEditOpen}>Edit</Button>
            <Button size="small" variant="contained" color="error" onClick={openDelete}>Delete</Button>
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
                <Button onClick={() =>deleteAdd(res.email)}>Delete</Button>         
              </DialogActions>
            </Dialog>
            </TableCell>
            <Dialog open={openEdit} onClose={handleEditClose}>
              <DialogTitle>Edit Hotline</DialogTitle>
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
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="lastname"
                  label="Last Name"
                  fullWidth
                  onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email"
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="contact"
                  label="Contact"
                  fullWidth
                  onChange={(e) => setContact(e.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button variant="contained" onClick={handleEditCancel}>Cancel</Button>
                <Button variant="outlined" onClick={()=>handleEditClose(email)}>Submit</Button>
              </DialogActions>
            </Dialog>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </div>
  )
}

export default Officials