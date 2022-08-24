import "./hotlinetable.scss"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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


function Hotlinetable() {
  return (
    <div className="hotlinetable">
      <div className="datatableTitle">
      Emergency Hotline Numbers
    </div>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow className="tittle">
            <TableCell>AGENCY</TableCell>
            <TableCell align="center">TRUNK & DIRECT LINE</TableCell>
            <TableCell align="center">AREA</TableCell>
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
             
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Hotlinetable