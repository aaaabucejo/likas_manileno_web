import Hotlinetable from "../../components/hotlinetable/Hotlinetable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./hotline.scss"

function Hotline() {
  return (
    <div className="hotline">
        <Sidebar/>
        <div className="hotlineContainer">
        <Navbar/>
        <Hotlinetable/>
        </div>
    </div>
  )
}

export default Hotline