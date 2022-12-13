import React,{useEffect,useState} from "react";
import axios from "axios";
import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';

function List() {

  const [users,setUser] = useState([]);
  useEffect(() => {
      const fetchPosts = async () => {
          axios.post('https://likasmanileno-backend.herokuapp.com/app/getUsers')
              .then(res => {
                  // console.log(res);
                  setUser(res.data);
              }).catch(err => {
                  console.log(err);
              })
      };
      fetchPosts();
  }, []);

  const getColor = (status) => {
    if(status == 'Arriving'){
      return '#0080ff'
    }else if(status =='Evacuated'){
      return '#32CD32'
    }else if(status == 'Forced'){
      return '#FF5733'
    }  
};

  return (
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
          <TableCell className="tableCell">Age</TableCell>
          <TableCell className="tableCell">Status</TableCell>
          {/* <TableCell className="tablecell">actions</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map(res => (
          <TableRow key={res.id}>
            {/* <TableCell>{res._id}</TableCell> */}
            <TableCell className="tableCell">{res.firstName}</TableCell>
            <TableCell  className="tableCell">{res.lastName}</TableCell>
            <TableCell  className="tableCell">{res.contactNo}</TableCell>
            <TableCell  className="tableCell">{moment(res.dateAdmitted).format('lll')}</TableCell>
            <TableCell  className="tableCell">{res.siteT}</TableCell>
            <TableCell  className="tableCell"><span className={`age ${res.status}`}>{res.age}</span></TableCell>
            <TableCell  className="tableCell" > <button style={{backgroundColor:`${getColor(res.status)}`, color:'#ffff', fontWeight:'500', border:'none', borderRadius:'4pt', fontSize:'10pt'}} >{res.status}</button></TableCell>         
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List