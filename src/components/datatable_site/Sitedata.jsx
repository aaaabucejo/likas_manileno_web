import './sitedata.scss';
// import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import React,{useEffect,useState} from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Sitedata() {

  const [users,setUser] = useState([]);
  useEffect(() => {
      const fetchPosts = async () => {
          axios.post('http://localhost:4000/app/getlocation')
              .then(res => {
                  console.log(res);
                  setUser(res.data);
              }).catch(err => {
                  console.log(err);
              })
      };
      fetchPosts();
  }, []);

 //get site tapos lagay sa URL
 const testPin=(address) =>{
  const data={
    address:address
  }
  console.log(data)
}


  //get address 
  const setAddress=(address) =>{
    
    const data = {
      address:address           
    }
    console.log(data)
    axios.post('http://localhost:4000/app/deletelocation',data)
    .then(res => {
      if(res.data != null){
        alert("deleted")
      }
    }).catch((res) =>{
      console.log(res)
    })
  
  }

  return (
    <div className='sitedata'>
         <div className="datatableTitle">
      Evacuation Sites
      <Link to="/sites/Newsite" style={{textDecoration:"none"}} className="link"> 
      Add Site
      </Link>
    </div>
    
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {/* <TableCell className="tableCell">ID No.</TableCell> */}
          <TableCell className="tableCell">Address</TableCell>
          <TableCell className="tableCell">Capacity</TableCell>
          <TableCell className="tableCell">Rooms</TableCell>
          <TableCell className="tableCell">Restrooms</TableCell>
          <TableCell className="tableCell">Kitckens</TableCell>
          <TableCell className="tableCell">Emergency Vehicles</TableCell>
          <TableCell className="tablecell">First Aid</TableCell>
          <TableCell className="tablecell">Officials</TableCell>
          <TableCell className="tablecell">Description</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {users.map(res => (
          <TableRow key={res.id}>
            {/* <TableCell>{res._id}</TableCell> */}
            <TableCell className="tableCell">{res.address}</TableCell>
            <TableCell  className="tableCell">{res.capacity}</TableCell>
            <TableCell  className="tableCell">{res.room}</TableCell>
            <TableCell  className="tableCell">{res.restroom}</TableCell>
            <TableCell  className="tableCell">{res.kitchen}</TableCell>
            <TableCell  className="tableCell">{res.evehicle}</TableCell>
            <TableCell  className="tableCell">{res.firstaid}</TableCell>
            <TableCell  className="tableCell">{res.official}</TableCell>
            <TableCell  className="tableCell">{res.description}</TableCell>
            
            
            {/* <TableCell  className="tableCell">{res.username}</TableCell>
            <TableCell  className="tableCell">{res.password}</TableCell> */}
           
            <TableCell className="tableCell">
            <Link to="/sites/siteinfo" style={{textDecoration:"none"}}>
            <button>View</button>
            </Link>
            <button onClick={() =>setAddress(res.address)}>Delete</button>
            </TableCell> 
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  )
}

export default Sitedata