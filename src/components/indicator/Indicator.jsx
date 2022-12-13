// import React from 'react';
import axios, { Axios } from "axios";
import React,{useEffect,useState} from "react";

import StatusIndicator from "react-status-indicator";


function Indicator() {

  // const [users,setUser] = useState([]);
  // useEffect(() => {
  //     const fetchPosts = async () => {
  //         axios.post('http://localhost:4000/app/getUsers')
  //             .then(res => {
  //                 console.log(res);
  //                 setUser(res.data);
  //             }).catch(err => {
  //                 console.log(err);
  //             })
  //     };
  //     fetchPosts();
  // }, []);
  
  // users.map((users)=>{
  //   if(users.map == 'Arriving'){
     
  //   }
  // })
    return (
      <div>
        <div id='arriving'>
        <StatusIndicator Active Pulse />
        {" Arriving "}
        </div>
        
        {/* <div>
          <StatusIndicator Positive Pulse />
        {" Evacuated "}
        </div> */}
        
        
        <StatusIndicator Negative Pulse />
        {"Forced"}
      </div>
    );
  
}
export default Indicator

// idle 
// preparation
// Force

// Low
// Moderate
// maxe