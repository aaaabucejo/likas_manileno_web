import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import HouseIcon from '@mui/icons-material/House';
import ChatIcon from '@mui/icons-material/Chat';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Sidebar() {

  const navigate = useNavigate()
  const removeToken = () => {
  localStorage.removeItem('token');
  navigate('/Login')
};

  return (
    <div className='sidebar'>
        <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Likas <span style={{color:"#F6BE00"}}>Manileño</span></span>
        </Link>
        </div>
        <div className="center">
            <ul>
                {/* <p className="title">QUICK ACCESS</p> */}

                <Link to="/" style={{textDecoration:"none"}}>
                <li>
                <DashboardIcon className="icons" />
                <span>Statistics</span>
                </li>
                </Link>

                <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                <PersonIcon className="icons"/>
                <span>Evacuee</span>
                </li>
                </Link>

                {/* <p className="title">USEFUL</p> */}
                <Link to="/sites" style={{textDecoration:"none"}}>
                <li>
                <HouseIcon className="icons"/>
                <span>Evacuation Sites</span>
                </li>
                </Link>

                <Link to="/admin" style={{textDecoration:"none"}}>
                <li>
                <PersonIcon className="icons"/>
                <span>Officials</span>
                </li>
                </Link>

                {/* <p className="title">HOTLINES</p> */}
                <Link to="/hotline" style={{textDecoration:"none"}}>
                <li>
                <LocalPhoneIcon className="icons"/>
                <span>Hotlines</span>
                </li>
                </Link>

                

                {/* <p className="title">ACCOUNT</p> */}
               
                {/* <Link to="/login" style={{textDecoration:"none"}}> */}
                <li>
                <LogoutIcon  className="icons"/>
                    <span onClick={ removeToken }>Logout</span>
                </li>
                {/* </Link> */}
            </ul>
        </div>

        {/* <div className="bottom"> if want nyo pa mag add sa side bar</div> */}

    </div>
  )
}

export default Sidebar