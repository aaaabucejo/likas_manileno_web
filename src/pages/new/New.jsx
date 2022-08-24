// import Navbar from "../../components/navbar/Navbar"
import Formresident from "../../components/forminput_resident/Formresident"
import Navbar from "../../components/navbar/Navbar"
import "./new.scss"


function New() {
 
  return(
    <div className="new">
      <div className="newContainer">
        <Navbar/>
        <Formresident/>
      </div>
      
    </div>
  )
}
export default New