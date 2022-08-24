import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import  "./sites.scss";
import Sitedata from "../../components/datatable_site/Sitedata";
import React, { useState } from "react";
import MapSite from "../../components/mapsite/MapSite";



function Sites() {
  const [selectPosition, setSelectPosition] = useState(null);

  
  return (
    <div className="sites">
    <Sidebar/>
        <div className="sitesContainer">
            <Navbar/>
            <div style={{width:'82vw', height:'50vh', padding:'20px 5px 5px 16px'}}>
            <MapSite selectPosition={selectPosition}/>
            </div>
            <Sitedata/>
        </div>
    </div>
  )
}

export default Sites