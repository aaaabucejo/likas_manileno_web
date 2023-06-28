import "./navbar.scss"
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import Button from '@mui/material/Button';
import React,{useEffect,useState} from "react";
import axios, { Axios } from "axios";
function Navbar() {

  const [users,setUser] = useState([]);
  useEffect(() => {
      const fetchPosts = async () => {
          axios.get('https://likasmanileno-api.onrender.com/app/getUsers')
              .then(res => {
                  // console.log(res);
                  setUser(res.data);
              }).catch(err => {
                  console.log(err);
              })
      };
      fetchPosts();
  }, []);

  const[status,setStatus] = useState('Forced');
  const setForce = () => {
    //update status
    const data = {
      status:status
    }
    axios.post('https://likasmanileno-api.onrender.com/app/updateStatus',data)
    .then(res => {
      console.log(res);
      window.location.reload();      
    }).catch(err => {
      console.log(err);
  })
  };

  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
               
            </div>
            <div className="items">
                 
                <div className="item">
                <Button onClick={setForce} >
                 <CrisisAlertIcon className="icon"/>
                 </Button>
                 {/* <div className="counter">4</div> */}
                </div>


                {/* <div className="item">
                <img src="https://media1.popsugar-assets.com/files/thumbor/UwqHyYaJbx0NSt4TrizsLEwVIyI/0x39:2509x2548/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/02/758/n/1922398/69895fd35e861d0df0e390.53702709_/i/Ryan-Reynolds.jpg" alt="" className="avatar" />
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar