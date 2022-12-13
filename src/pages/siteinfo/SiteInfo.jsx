import Chart from "../../components/chart/Chart"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
// import List from "../../components/table/Table"
import "./siteinfo.scss"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';


function SiteInfo() {
  const style = {
    width: '100%',
    maxWidth: 500,
    bgcolor: 'background.paper',
  };

  // const navigate = useNavigate()
  // if(localStorage.getItem('token') === null){
  // // navigate('/Login') 
  // // console.log('no token') 
  // return (
  //   <div>
  //     {(<Login/>)}
  //   </div>
  // ) 
  // }else{
    // console.log('has token')
  return (
    
    <div className="siteinfo">
        <Sidebar/>
    <div className="siteinfoContainer">
        <Navbar/>
        <div className="top">
          <div className="left">

          <Link to="../editsite" style={{textDecoration:"none"}}>
          <div className="editButton">Edit</div>
          </Link>

            <div className="indi">
              <img src="https://national-u.edu.ph/wp-content/uploads/2021/04/banner-nu-manila.jpg"
               alt="" className="indiImg" />
               <div className="details">
                 <h1 className="indiTitle">National University</h1>
                 <div className="detailIndi">
                   <span className="infoKey">Address:</span>
                   <span className="infoValue">M.F Jhocson Street Sampaloc Manila</span>
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

        <div className="bottom">
        <h1 className="title">Admitted Residents</h1>
          {/* <List/> */}
          <Divider textAlign="center">
            <Chip icon={<MeetingRoomIcon/>} variant="outlined" label="Room 401" />
            <Chip icon={<FaceIcon />} variant="outlined" label="12/30" />

          </Divider>
          <div className="evacueeList">
          {/* <Divider textAlign="center">
            <Chip label="Room 401" />
          </Divider> */}
            <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
          <ListItemText primary="Darell Calalang" />
          <Chip color="success" label="IN" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Cyrus Robles" />
           <Chip color="error" label="OUT" />
        </ListItem>
        <ListItem button>
        <ListItemText primary="Karl Francisco" />
           <Chip color="success" label="IN" />
        </ListItem>
        <Divider light />
        <ListItem button>
        <ListItemText primary="Francis Abceo" />
           <Chip  color="error" label="OUT" />      
         </ListItem>
         <Divider light />
          <ListItem button>
        <ListItemText primary="Derson Estrella" />
           <Chip  color="error" label="OUT" />      
         </ListItem>
         <Divider light />
         <ListItem button>
        <ListItemText primary="Mark Zuckerberg" />
           <Chip color="success" label="IN" />      
         </ListItem>
         <Divider light />
         <ListItem button>
        <ListItemText primary="Paolo Alasco " />
           <Chip color="warning" label="ONGOING" />      
         </ListItem>
         <Divider light />
         <ListItem button>
        <ListItemText primary="Chloe Bonifacio" />
        <Chip color="warning" label="ONGOING" />      
         </ListItem>
         <ListItem button>
        <ListItemText primary="Derson Estrella" />
        <Chip color="warning" label="ONGOING" />      
         </ListItem>
         <Divider light />
         <ListItem button>
        <ListItemText primary="Raiza Gavilaga" />
           <Chip color="success" label="IN" />      
         </ListItem>
         <Divider light />
         <ListItem button>
        <ListItemText primary="Daniel Borgona" />
           <Chip color="warning" label="ONGOING" />      
         </ListItem>
         <Divider light />
         <ListItem button>
        <ListItemText primary="Gerwin Bondoc" />
           <Chip color="error" label="OUT" />      
         </ListItem>
         <Divider light />
      </List>
      </div>
      
      <Divider textAlign="center">
            <Chip icon={<MeetingRoomIcon/>} variant="outlined" label="Room 401" />
            <Chip icon={<FaceIcon />} variant="outlined" label="12/30" />

          </Divider>
          <div className="evacueeList">
          {/* <Divider textAlign="center">
            <Chip label="Room 401" />
          </Divider> */}
            <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
          <ListItemText primary="Darell Calalang" />
          <Chip color="success" label="IN" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Cyrus Robles" />
           <Chip color="error" label="OUT" />
        </ListItem>
        <ListItem button>
        <ListItemText primary="Karl Francisco" />
           <Chip color="success" label="IN" />
        </ListItem>
        <Divider light />
        <ListItem button>
        <ListItemText primary="Francis Abceo" />
           <Chip  color="error" label="OUT" />      
         </ListItem>
         <Divider light />
          <ListItem button>
        <ListItemText primary="Derson Estrella" />
           <Chip  color="error" label="OUT" />      
         </ListItem>
         <Divider light />
         <ListItem button>
        <ListItemText primary="Mark Zuckerberg" />
           <Chip color="success" label="IN" />      
         </ListItem>
         <Divider light />
         <ListItem button>
        <ListItemText primary="Paolo Alasco " />
           <Chip color="warning" label="ONGOING" />      
         </ListItem>
         <Divider light />
         <ListItem button>
        <ListItemText primary="Chloe Bonifacio" />
        <Chip color="warning" label="ONGOING" />      
         </ListItem>
         <ListItem button>
        <ListItemText primary="Derson Estrella" />
        <Chip color="warning" label="ONGOING" />      
         </ListItem>
         <Divider light />
         <ListItem button>
        <ListItemText primary="Raiza Gavilaga" />
           <Chip color="success" label="IN" />      
         </ListItem>
         <Divider light />
         <ListItem button>
        <ListItemText primary="Daniel Borgona" />
           <Chip color="warning" label="ONGOING" />      
         </ListItem>
         <Divider light />
         <ListItem button>
        <ListItemText primary="Gerwin Bondoc" />
           <Chip color="error" label="OUT" />      
         </ListItem>
         <Divider light />
      </List>
      </div>
      
        </div>    
    </div>
    </div>
  )
}
// }
export default SiteInfo