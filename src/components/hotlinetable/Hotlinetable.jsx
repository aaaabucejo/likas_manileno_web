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

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function createData(name, number, area,) {
  return { name, number, area,};
}

const rows = [
  createData('Emergency 911 National Office','(02) 925-9111', "NCR", ),
  createData('Bureau of Fire Protection', "(02) 426-0219", "NCR", ),
  createData('Philippine National Police', '(2) 722-0650', "NCR",),
  createData('Philippine Coast Guard', '(02) 527-8481',"NCR",),
  createData('Philippine Coast Guard', '(02) 527-8481',"NCR",),
  createData('Manila Traffic Hotline', '(02)527-3088',"NCR",),
  createData('Department of Transportation', '7890',"NCR",),
  createData('Department of Social Welfare and Development', '(02) 931-81-01',"NCR",),
  createData('Office forTransportation Security', '(02) 853-5249',"NCR",),
  createData('Civil Aviation Authority of the Philippines', '(02) 879-9112',"NCR",),


];



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Hotlinetable() {

// snackbar
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
  
    
    //dito ma sasave ng database
    axios.post('http://localhost:4000/app/signup')
    .then(res => {
      console.log(res)
      setOpen(false);
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
          />
           <TextField
            autoFocus
            margin="dense"
            id="contactNumber"
            label="Contact#"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="area"
            label="Area"
            fullWidth
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {row.name} </TableCell>
              <TableCell align="center">{row.number}</TableCell>
              <TableCell align="center">{row.area}</TableCell>
              <TableCell align="center">
              <button>Edit</button>
              <button>Delete</button>
              </TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Hotlinetable