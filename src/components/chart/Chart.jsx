import "./chart.scss"
import React, { PureComponent, useEffect,useMemo,useState } from 'react';
import axios from "axios";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { color } from "@mui/system";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


// function TabPanel(props) {
//   const { children, value, index, ...other } = props;
// }

function Chart({ title} ) {
  const [locations,setLocations] = useState([]);
  useEffect(() => {
      const fetchPosts = async () => {
          axios.post('https://likasmanileno-api.onrender.com/app/getlocation')
              .then(res => {
                  
                  setLocations(res.data);
                  // const total = res.data.filter((tl) => tl.status >= 60);
                 
              }).catch(err => {
                  console.log(err);
              })
      };
      fetchPosts();
  }, []);
  
  // console.log(locations)
  // locations.map((locations)=>{
  //   console.log('capacity: '+locations.capacity)
  //   // console.log('name: '+locations.name)
  //   if(locations.capacity == 500){
  //     console.log('500')
  //   }
  // })
  



//get color
  const newArr = []
  locations.map((locations)=>{  
      if((locations.totalevac/locations.capacity)>= 0.7){
        // console.log(locations.capacity)
        newArr.push({name:locations.name,totalevac:locations.totalevac,fill:'#FF0000'})
      }else if((locations.totalevac/locations.capacity)<0.7 && (locations.totalevac/locations.capacity)>= 0.5){
        //moderate
        newArr.push({name:locations.name,totalevac:locations.totalevac,fill:'#ffff27'})
      }else if((locations.totalevac/locations.capacity)< 0.5){
        //available
        newArr.push({name:locations.name,totalevac:locations.totalevac,fill:'#00cc00'})
      }   
      
      
  }) 



  
 return (
    <div className="chart">
  
    <div className="chartContainer">
    <ResponsiveContainer width="100%" height="100%">
    {/* {users.map(res => ( */}
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={newArr}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 50,
          }}
        >
          <CartesianGrid stroke="#808080" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          
          <Tooltip />
          <Legend />
          <Bar dataKey="totalevac" barSize={50} fill="fill" />        
        </ComposedChart>
        {/* ))} */}
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Chart