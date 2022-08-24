import Chart from "../../components/chart/Chart"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import List from "../../components/table/Table"
import "./siteinfo.scss"
import { Link } from "react-router-dom";

function SiteInfo() {
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

          <div className="right">
            <Chart aspect={ 2.9 / 1} title=" Updates from the last 6 months "/>
          </div>
        </div>

        <div className="bottom">
        <h1 className="title">Admitted Residents</h1>
          <List/>
        </div>
    </div>
    </div>
  )
}

export default SiteInfo