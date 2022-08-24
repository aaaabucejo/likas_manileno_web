import Datatable from "../../components/datatable/Datatable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import MapData from '../../components/mapdata/MapData'
import React, { useState } from "react";
import "./list.scss"


function List() {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>

<div style={{width:'82vw', height:'50vh', padding:'20px 5px 5px 16px'}}>
    <MapData selectPosition={selectPosition}/>
</div>
      <Datatable/>
    </div>
    </div>
  )
}

export default List