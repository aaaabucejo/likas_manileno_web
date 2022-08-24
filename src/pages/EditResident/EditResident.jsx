import Navbar from '../../components/navbar/Navbar'
import Editresident from "../../components/edit_resident/Editresident"
import './EditResident.scss'

function EditResident() {
  return (
    <div className='EditResident'>
        <div className='EditResidentContainer'>
            <Navbar/>
            <Editresident/>
        </div>
    </div>
  )
}

export default EditResident