import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"
import { useNavigate } from "react-router-dom";
import Login from "../login/Login"
import Cards from "../../components/cards/Cards";





import "./home.scss"
// export default class Home extends Component{
const Home = () => {
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
    // console.log('has token')
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer"> 
      <Navbar/>
       
        <div className="cards">
          <Cards type="newuser"/>
          {/* <Cards type="senior"/>
          <Cards type="families"/>
          <Cards type="evacuation"/> */}
        </div>
        
        <div className="charts">
          {/* <Featured/> */}
          <Chart title="Evacuation Site Status" aspect={1/4}/>
        </div>

        <div className="listContainer">
          <div className="listTitle">Latest Updates</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}
}
export default Home