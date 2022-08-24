import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
function Navbar() {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
               
            </div>
            <div className="items">
                 
                <div className="item">
                 <ChatBubbleIcon className="icon"/>
                 <div className="counter">4</div>
                </div>


                <div className="item">
                <img src="https://media1.popsugar-assets.com/files/thumbor/UwqHyYaJbx0NSt4TrizsLEwVIyI/0x39:2509x2548/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/02/758/n/1922398/69895fd35e861d0df0e390.53702709_/i/Ryan-Reynolds.jpg" alt="" className="avatar" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar