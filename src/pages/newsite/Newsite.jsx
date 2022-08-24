
import "./newsite.scss"
import Navbar from "../../components/navbar/Navbar";
import FormInput from "../../components/forminput_site/FormInput";


function Newsite(){
    return(
        <div className="newsite">
            <div className="newsiteContainer">
            <Navbar/>
            <FormInput/>
            </div>
        </div>
    )
}

export default Newsite