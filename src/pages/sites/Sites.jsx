import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import  "./sites.scss";
import Sitedata from "../../components/datatable_site/Sitedata";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login"
import HeatMap from "../../components/heatmap/HeatMap";


function Sites() {
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
    <div className="sites">
    <Sidebar/>
        <div className="sitesContainer">
            <Navbar/>
            <Sitedata/>
        </div>
    </div>
  )
}
// }

export default Sites