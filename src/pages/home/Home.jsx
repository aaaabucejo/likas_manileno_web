import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"




import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer"> 
      <Navbar/>
        <div className="widgets">
          <Widget type="newuser"/>
          <Widget  type="senior"/>
          <Widget  type="families"/>
          <Widget  type="evacuation"/>
        </div>
        
        <div className="charts">
          <Featured/>
          <Chart title="Latest Updates" aspect={3/1}/>
        </div>

        <div className="listContainer">
          <div className="listTitle">Latest Updates</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home