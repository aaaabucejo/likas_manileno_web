import Navbar from "../../components/navbar/Navbar"
import Officials from "../../components/Officials/Officials"
import Sidebar from "../../components/sidebar/Sidebar"
import "./admin.scss"
import { useNavigate } from "react-router-dom";
import Login from "../login/Login"
import { useState } from "react";
import SearchBar from "../../components/searchbar/SearchBar";

function Admin() {
  const [selectPosition, setSelectPosition] = useState(null);


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
    <div className="admin">
        <Sidebar/>
    <div className='adminContainer'>
        <Navbar/>
        <Officials/>
    </div>
    </div>
  )
}
}
export default Admin