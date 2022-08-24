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
import { Link } from "react-router-dom";



function List() {
  
  const [users,setUser] = useState([]);
  useEffect(() => {
      const fetchPosts = async () => {
          axios.post('https://likasmanileno-backend.herokuapp.com/app/getUsers')
              .then(res => {
                  //console.log(res);
                  setUser(res.data);
              }).catch(err => {
                  console.log(err);
              })
      };
      fetchPosts();
  }, []);

  //get site tapos lagay sa URL
  const testPin=(siteT) =>{
    const data={
      siteT:siteT
    }
    console.log(data)
  }
    
  


  //get first and lastname
  const setID=(firstName, lastName) =>{
    
    const data = {
      firstName: firstName,
      lastName: lastName,      
    }
    console.log(data)
    axios.post('https://likasmanileno-backend.herokuapp.com/app/deleteresident',data)
    .then(res => {
      if(res.data != null){
        alert("deleted")
      }
    }).catch((res) =>{
      console.log(res)
    })
  
  }

  return (
    <div className="datatable">
    <div className="datatableTitle">
      Residents
      <Link to="/users/new" style={{textDecoration:"none"}} className="link"> 
      Add Resident
      </Link>
    </div>
    
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {/* <TableCell className="tableCell">ID No.</TableCell> */}
          <TableCell className="tableCell">First Name</TableCell>
          <TableCell className="tableCell">Last Name</TableCell>
          <TableCell className="tableCell">Contact No.</TableCell>
          <TableCell className="tableCell">Date Admitted</TableCell>
          <TableCell className="tableCell">Site Transfered</TableCell>
          <TableCell className="tableCell">Status</TableCell>
          <TableCell className="tablecell">actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map(res => (
          <TableRow key={res.id}>
            {/* <TableCell>{res._id}</TableCell> */}
            <TableCell className="tableCell">{res.firstName}</TableCell>
            <TableCell  className="tableCell">{res.lastName}</TableCell>
            <TableCell  className="tableCell">{res.contactNo}</TableCell>
            <TableCell  className="tableCell">{res.dateAdmitted}</TableCell>
            <TableCell className="tableCell">{res.siteT}</TableCell>
            <TableCell  className="tableCell"><span className={`status ${res.status}`}>{res.status}</span>
            
            {/* <TableCell  className="tableCell">{res.username}</TableCell>
            <TableCell  className="tableCell">{res.password}</TableCell> */}
            </TableCell>
          
            <TableCell className="tableCell">
            <Link to="/users/userId" style={{textDecoration:"none"}}>
            <button>View</button>
            </Link>
            <button onClick={() =>setID(res.firstName,res.lastName)}>Delete</button>
            </TableCell> 
            {/* <button onClick={() =>testPin()}>pindot</button> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  )
}

export default List