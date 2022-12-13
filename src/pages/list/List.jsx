import Datatable from "../../components/datatable/Datatable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import React, { useState } from "react";
import "./list.scss"
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";

function List() {
  const navigate = useNavigate()
  if(localStorage.getItem('token') === null){
  // navigate('/Login') 
  // console.log('no token') 
  return (
    <div>
      {(<Login/>)}
    </div>
  ) 
  }else{
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <Datatable/>
    </div>
    </div>
  )
}
}
export default List