import Hotlinetable from "../../components/hotlinetable/Hotlinetable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./hotline.scss"
import { useNavigate } from "react-router-dom";
import Login from "../login/Login"
import Geocode from "../../components/geocode/Geocode";




  const Hotline = () => {
    // const navigate = useNavigate()
    // if(localStorage.getItem('token') === null){
    // navigate('/Login') 
    // // console.log('no token') 
    // return (
    //   <div>
    //     {(<Login />)}
    //   </div>
    // ) 
    // }else{
      // console.log('has token')
  return (
    <div className="hotline">
        <Sidebar/>
        <div className="hotlineContainer">
        <Navbar/>
        <Hotlinetable/>
        
        </div>
    </div>
  )
// }
  
}
export default Hotline