import "./featured.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Featured() {
  return (
    <div className="featured">
    <div className="top">
        <h1 className="title">Total Lives Saved</h1>
        <ExpandMoreIcon fontSize="small"/>
    </div>

    <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={80} text={"80%"} strokeWidth={8}/>
        </div>
        <p className="title">Total lives safe today</p>
        <p className="amount"> <LocalHospitalIcon fontSize="large" className="icon"/> 44,742</p>
        <p className="desc">Previous individuals is safe and getting medical treatments in their respective evacuation sites
        </p>

        <div className="summary">
            <div className="indi">
                <div className="indiTitle">Target</div>
                <div className="indiResult positive">
                <ArrowDropUpIcon fontSize="small"/>
                <div className="resultAmount">51,541</div>
                </div>
            </div>
            <div className="indi">
                <div className="indiTitle">Treating</div>
                <div className="indiResult positive">
                <ArrowDropUpIcon fontSize="small"/>
                <div className="resultAmount">541</div>
                </div>
            </div>
            <div className="indi">
                <div className="indiTitle">Sent Home</div>
                <div className="indiResult negative">
                <ArrowDropDownIcon fontSize="small"/>
                <div className="resultAmount">1,821</div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Featured