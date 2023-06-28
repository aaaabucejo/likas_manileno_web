// import React, { Component } from "react";
import { MapContainer, CircleMarker, TileLayer,Tooltip, Marker } from "react-leaflet";
import React,{useEffect,useState} from "react";
import axios, { Axios } from "axios";

// import data from "./cities";

function HeatMap() {

  const [users,setUser] = useState([]);
  useEffect(() => {
      const fetchPosts = async () => {
          axios.get('https://likasmanileno-api.onrender.com/app/getUsers')
              .then(res => {
                  // console.log(res);
                  setUser(res.data);
              }).catch(err => {
                  console.log(err);
              })
      };
      fetchPosts();
  }, []);


// console.log(sample)
// console.log(users)

let data = {
    userss: [
      //Longtitude    Latitude 
      {
         firstName:'Francis',
         lastName:'Abucejo',
         contactNo:'099999',
         siteT:'National University - Manila',
         coordinates: [ '120.9946325065362', '14.604341747831796'],
         status:'23',
         stat:'forced',
        
      },
    ],
    // minLat: 14.599512,
    // maxLat: 14.599512,
    // minLong: 120.984222,
    // maxLong: 120.984222
    // minLat: 14.604341747831796,
    // maxLat: 14.604341747831796,
    // minLong: 120.9946325065362,
    // maxLong: 120.9946325065362,
    latitude: 14.604341747831796,
    longtitude: 120.9946325065362
  };


        //get center
        // var centerLat = (data.minLat + data.maxLat) / 2;
        // var centerLong = (data.minLong + data.maxLong) / 2;

        var centerLat = data.latitude;
        var centerLong = data.longtitude; 
        
        return (
          <div>
            <h3 style={{ textAlign: "center" }}></h3>
            <MapContainer
              style={{ height: "420px", width: "100%" }}
              zoom={15}            
              center={[centerLat, centerLong]}
            >
              <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    
              {users.map((users) => {
                return (
                  //where to put center
                  <CircleMarker
                  // key={users.id}
                    // key={_id}
                     center={[users["latitude"], users["longtitude"]]}
                     color={"red"}
                    // radius={20 * Math.log(city["population"] / 10000000)}
                    fillOpacity={0.7}
                    stroke={false}>
                  
                    <Tooltip direction="top" offset={[5, 5]} opacity={5}>
                    <div>
                      <span>{"Name: "+users["firstName"]+ " " +users["lastName"] }</span>
                    </div>
                    <div>
                      <span>{"ContactNo: "+users["contactNo"]}</span>
                    </div>
                    <div>
                      <span>{"Site Transferred "+users["siteT"] }</span>
                    </div>
                    <div>
                      <span>{"Age: "+users["age"] }</span>
                    </div>
                    <div>
                      <span>{"Status: "+users["status"] }</span>
                    </div>
                      
                    </Tooltip>
                  </CircleMarker>
                );
              })}
            </MapContainer>
          </div>
        );
      
    }
export default HeatMap