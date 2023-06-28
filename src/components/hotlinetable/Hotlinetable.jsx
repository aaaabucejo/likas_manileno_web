import "./hotlinetable.scss"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import axios, { Axios } from "axios";
import {useEffect,useState} from "react";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// function createData(name, number, area,) {
//   return { name, number, area,};
// }

// const rows = [
//   createData('Emergency 911 National Office','(02) 925-9111', "NCR", ),
//   createData('Bureau of Fire Protection', "(02) 426-0219", "NCR", ),
//   createData('Philippine National Police', '(2) 722-0650', "NCR",),
//   createData('Philippine Coast Guard', '(02) 527-8481',"NCR",),
//   createData('Philippine Coast Guard', '(02) 527-8481',"NCR",),
//   createData('Manila Traffic Hotline', '(02)527-3088',"NCR",),
//   createData('Department of Transportation', '7890',"NCR",),
//   createData('Department of Social Welfare and Development', '(02) 931-81-01',"NCR",),
//   createData('Office forTransportation Security', '(02) 853-5249',"NCR",),
//   createData('Civil Aviation Authority of the Philippines', '(02) 879-9112',"NCR",),


// ];



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Hotlinetable() {

  // edit hotline form
  const [openEditHotline, setOpenEditHotline] = React.useState(false);
  const [Dialogopen, setDialogOpen] = React.useState(false);

  const handleEditOpen = (_id) => {
    setOpenEditHotline(true);
    set_Id(_id);
    
  };

  const handleEditClose = (_id) => {
    
    const data = {
      _id:_id,
      agency: agencyNewChange? agency: getDefaultValue?.agency || '',
      directline: directlineNewChange? directline: getDefaultValue?.directline || '',
      area: areaNewChange? area: getDefaultValue?.area || '',
    }
    // console.log(data)
    axios.post('https://likasmanileno-api.onrender.com/app/updatehotline',data)
    .then(res => {
      console.log(res)
      setOpenEditHotline(false);
      window.location.reload();
    }).catch((res) =>{
      console.log(res)
    })
 
  };

  const handleEditCancel = () =>{
    setOpenEditHotline(false);
  }



// snackbar
  const [openSnack, setOpenSnack] = React.useState(false);
  const [_id,set_Id] = useState("");
  const[agency,setAgency] = useState("");
  const[directline,setDirectline] = useState("");
  const[area,setArea] = useState("");

  //this will check if the text fields are changed
  const [agencyNewChange,setAgencyNewChange] = useState(false);
  const [directlineNewChange,setDirectLineNewChange] = useState(false);
  const [areaNewChange,setAreaNewChange] = useState(false);
  const [selectedHotline,setSeletedHotline] = useState("");

  const handleAddSnack = () => {
    const data = {
      agency: agency,
      directline: directline,
      area: area
    }
    axios.post('https://likasmanileno-api.onrender.com/app/signuphotline',data)
    .then(res => {
      console.log(res)
      setOpen(false);
      window.location.reload();
    }).catch((res) =>{
      console.log(res)
    })
  };

  const [hotline,setHotline] = useState([]);
  useEffect(() => {
      const fetchPosts = async () => {
          axios.get('https://likasmanileno-api.onrender.com/app/gethotline')
              .then(res => {
                  // console.log(res);
                  setHotline(res.data);
              }).catch(err => {
                  console.log(err);
              })
      };
      fetchPosts();
  }, []);

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };
  // snackbar

  const deletehotline=() =>{

    
    console.log(selectedHotline)
    axios.post('https://likasmanileno-api.onrender.com/app/deletehotline',selectedHotline)
    .then(res => {
      setDialogOpen(false);
      window.location.reload();
      // console.log('deleted successful')
    }).catch((res) =>{
      console.log(res)
    })
  
  }


  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const openDelete = (_id,directline) => {
    setSeletedHotline({_id,directline})
    setDialogOpen(true);
    
   

  };

  const closeDelete = () => {
    setDialogOpen(false);
  };

  const getDefaultValue = hotline.find(hotline => hotline._id === _id);
  
  
  return (
    <div className="hotlinetable">
      <div className="datatableTitle">
      Emergency Hotline Numbers
    <Button onClick={handleClickOpen}   startIcon={<AddIcon/>} variant="contained" disableElevation> 
      Add Hotline
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{fontWeight: 500,}}>ADD HOTLINE NUMBER </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out the form below to add a Hotline Number for incase of emergency.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="agencyName"
            label="Agency Name"
            fullWidth
            onChange={(e) => setAgency(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="contactNumber"
            label="Contact#"
            fullWidth
            onChange={(e) => setDirectline(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="area"
            label="Area"
            fullWidth
            onChange={(e) => setArea(e.target.value)}
          />
          
        
        </DialogContent>
        <DialogActions>
        <Stack  direction="row" spacing={2}>
        <Button onClick={handleClose} variant="contained">Cancel</Button>
        {/* <Button onClick={handleButton} variant="contained">Cancel</Button> */}
      <Button onClick={handleAddSnack}  variant="outlined">Add</Button>
      <Snackbar open={openSnack} autoHideDuration={4000} onClose={handleCloseSnack}>
        <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
         Hotline Number Added
        </Alert>
      </Snackbar>
        </Stack>
        
        </DialogActions>
      </Dialog>

    </div>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow className="tittle">
            <TableCell className="tableCellName">AGENCY</TableCell>
            <TableCell align="center" className="tableCellName">TRUNK & DIRECT LINE
            </TableCell>
            <TableCell align="center" className="tableCellName">AREA</TableCell>
            <TableCell align="center" className="tableCellName">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hotline.map((res) => (
            <TableRow
              // key={row.name}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {res.agency} </TableCell>
              <TableCell align="center">{res.directline}</TableCell>
              <TableCell align="center">{res.area}</TableCell>
              <TableCell align="center">
              <Button variant="contained" size="small"   onClick={()=>handleEditOpen(res._id)}>Edit</Button>
              &nbsp; &nbsp;
              <Button size="small" variant="contained" color="error" onClick={()=>openDelete(res._id,res.directline)}>Delete</Button>
              {/* <Button  variant="contained" size="small" color="error" onClick={() =>deletehotline(res.directline)}>Delete</Button> */}
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
                <Button onClick={deletehotline}>Delete</Button>         
              </DialogActions>
            </Dialog>
             </TableCell>


              {/* Edit forms */}
              <Dialog open={openEditHotline} onClose={handleEditClose}>
              <DialogTitle>Edit Hotline</DialogTitle>
              <DialogContent>
                <DialogContentText>
                 Fill out the fields you wish to change.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="EditAgencyName"
                  label="Agency Name"
                  fullWidth
                  defaultValue={getDefaultValue? getDefaultValue.agency: ''}
                  onChange={(e) => {
                    setAgency(e.target.value);
                    setAgencyNewChange(true)
                  }}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="EditContactNumber"
                  label="Contact#"
                  fullWidth
                  defaultValue={getDefaultValue? getDefaultValue.directline: ''}
                  onChange={(e) => {
                    setDirectline(e.target.value);
                    setDirectLineNewChange(true);
                  }}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="EditArea"
                  label="Area"
                  fullWidth
                  defaultValue={getDefaultValue? getDefaultValue.area : ''}
                  onChange={(e) => {
                    setArea(e.target.value);
                    setAreaNewChange(true);
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button variant="contained" onClick={handleEditCancel}>Cancel</Button>
                <Button variant="outlined" onClick={()=>handleEditClose(_id)}>Submit</Button>
              </DialogActions>
            </Dialog>
             {/* Edit forms */}
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Hotlinetable