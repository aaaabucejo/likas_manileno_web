import EditSite from '../../components/edit_site/EditSite'
import Navbar from '../../components/navbar/Navbar'
import './editsite.scss'

function Editesite() {
  return (
    <div className="editsite">
    <div className='editsiteContainer'>
        <Navbar/>
        <EditSite/>
    </div>
    </div>
  )
}

export default Editesite