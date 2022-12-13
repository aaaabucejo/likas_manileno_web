import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import RoomCapacity from '../../components/roomcapcity/RoomCapacity'
import Sidebar from '../../components/sidebar/Sidebar'
import './rooms.scss'

function Rooms() {
  return (
    <div className='rooms'>
    <Sidebar/>
    <div className='roomsContainer'>
    <Navbar/>
    <RoomCapacity/>
    </div>
    </div>
  )
}

export default Rooms