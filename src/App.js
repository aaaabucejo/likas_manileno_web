import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Hotline from "./pages/hotline/Hotline";
import Sites from "./pages/sites/Sites";
import Newsite from "./pages/newsite/Newsite";
import 'mapbox-gl/dist/mapbox-gl.css';
import SiteInfo from "./pages/siteinfo/SiteInfo";
import Editesite from "./pages/EditSite/Editesite";
import Rooms from "./pages/rooms/Rooms";



//import axios from 'axios'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from "./pages/Admin/Admin";


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>

     <Route path="/">
        <Route index element={<Home />}/>
        <Route path="login" element={<Login/>}/> 
        <Route path="admin" element={<Admin/>}/> 

         {/*Routes for Residents*/}
        <Route path="users">
          <Route index element={<List/>}/>
          <Route path="new" element={<New/>}/>
          <Route path="userId" element={<Single/>}/>
        </Route>
         {/*End Routes for Residents*/}
        <Route path="hotline" element={<Hotline/>}/> 

          {/*Routes for Evactuation site  */}
        <Route path="sites">
        <Route index element={<Sites/>}/>
        <Route path="newsite" element={<Newsite/>}/>
        <Route path="siteinfo" element={<SiteInfo/>}/>
        <Route path="editsite" element={<Editesite/>}/>
        <Route path="rooms" element={<Rooms/>}/>


        </Route>
         {/*End Routes for Evactuation site  */}

     </Route> 

    </Routes>
  </BrowserRouter>,
    </div>
  );
}

export default App;