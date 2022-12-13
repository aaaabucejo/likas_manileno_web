import "./roomcapacity.scss"
import * as React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
//table
import { DataGrid } from '@mui/x-data-grid';
//chiper
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import Paper from '@mui/material/Paper';

//icon
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';



function RoomCapacity() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };



    
  return (
    <div className='roomCapacity'>
    <div className='capacityContainer'>
    <Box sx={{ width: '100%', typography: 'body1' }}  >
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
          <TabList onChange={handleChange} aria-label="lab API tabs example"  value={value} variant="scrollable" scrollButtons="auto">
        {/* Tab Settings PS. dito mag aadd ng TABS */}
            <Tab label="Jacinto Zamora Elementary School" value="1" />
            <Tab label="Padre Burgos Elementary School" value="2" />
            <Tab label="National University" value="3" />
            <Tab label="Holy Trinity Academy " value="4" />
            <Tab label="Ramon Magsaysay High School " value="5" />

          </TabList>
        </Box>

        {/* Laman ng bawat tabs PS. dito lalabas dapat pag nad add ng TABS*/}
        <TabPanel value="1">

        <div style={{paddingBottom:"7%",}}>
        <h1>1ST FLOOR</h1>
        <div style={{borderBottom:"solid", borderWidth:'.5px', color:"#B2BEB5"}}></div>

        <div style={{paddingTop:"15pt", display:"block"}}>
            <Stack direction="row" spacing={1}>

      <Paper style={{gap:"1%", width:"100%"}} sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 2,
        m: 1,
      }}
      component="ul">
          <Chip 
          icon={<MeetingRoomIcon />} 
          label="Room 401" 
          variant="outlined"

          />
          <Chip
          icon={<FaceIcon />} 
          label="1/250" 
          variant="outlined" 
          color="primary" 
          />

          <Chip 
          icon={<MeetingRoomIcon />} 
          label="Room 402" 
          variant="outlined"  />
          <Chip 
          icon={<FaceIcon />} 
          label="48/250" 
          variant="outlined" 
          color="primary" />

          <Chip 
          icon={<MeetingRoomIcon />} 
          label="Room 403" 
          variant="outlined"  />
          <Chip icon={<FaceIcon />} 
          label="87/250" 
          variant="outlined" 
          color="primary"/>

          <Chip 
          icon={<MeetingRoomIcon />} 
          label="Room 404" 
          variant="outlined"  />
          <Chip 
          icon={<FaceIcon />} 
          label="100/250" 
          variant="outlined" 
          color="primary" />
          </Paper>
        </Stack>
        </div>
        </div>     

             {/*  */}

             
        <div style={{paddingBottom:"7%",}}>
        <h1>2ND FLOOR</h1>
        <div style={{borderBottom:"solid", borderWidth:'.5px', color:"#B2BEB5"}}></div>

        <div style={{paddingTop:"15pt", display:"block"}}>
            <Stack direction="row" spacing={1}>

      <Paper style={{gap:"1%", width:"100%"}} sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 2,
        m: 1,
      }}
      component="ul">
          <Chip 
          icon={<MeetingRoomIcon />} 
          label="Room 401" 
          variant="outlined"

          />
          <Chip
          icon={<FaceIcon />} 
          label="1/250" 
          variant="outlined" 
          color="primary" 
          />

          <Chip 
          icon={<MeetingRoomIcon />} 
          label="Room 402" 
          variant="outlined"  />
          <Chip 
          icon={<FaceIcon />} 
          label="48/250" 
          variant="outlined" 
          color="primary" />

          <Chip 
          icon={<MeetingRoomIcon />} 
          label="Room 403" 
          variant="outlined"  />
          <Chip icon={<FaceIcon />} 
          label="87/250" 
          variant="outlined" 
          color="primary"/>

          <Chip 
          icon={<MeetingRoomIcon />} 
          label="Room 404" 
          variant="outlined"  />
          <Chip 
          icon={<FaceIcon />} 
          label="100/250" 
          variant="outlined" 
          color="primary" />
          </Paper>
        </Stack>
        </div>
        </div>          

        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item four</TabPanel>
        <TabPanel value="5">Item five</TabPanel>

      </TabContext>
    </Box>
    </div>
    </div>
  )
}

export default RoomCapacity