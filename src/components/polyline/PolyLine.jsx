// import React, { Component } from "react";
import { MapContainer, CircleMarker, TileLayer,Tooltip} from "react-leaflet";
import React,{useEffect,useState, useRef} from "react";
import "leaflet/dist/leaflet.css";
import axios, { Axios } from "axios";
import {Icon} from 'leaflet'
// import data from "./CostumeMarker";


 
function PolyLine() {
  const mapRef = useRef(null);
  const [locations,setLocations] = useState([]);
  useEffect(() => {
      const fetchPosts = async () => {
          axios.get('https://likasmanileno-api.onrender.com/app/getlocation')
              .then(res => {
                  // console.log(res);
                  setLocations(res.data);
              }).catch(err => {
                  console.log(err);
              })
      };
      fetchPosts();
  }, []);

  

  

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
  latitude: 14.604341747831796,
  longtitude: 120.9946325065362
};
      var centerLat = data.latitude;
      var centerLong = data.longtitude; 

      const position = [14.604341747831796, 120.9946325065362]
  return (
    <div>
    <MapContainer
      ref={mapRef}
      style={{ height: "420px", width: "100%" }}
      zoom={15}
      center={[centerLat, centerLong]}
      
    >
      <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {locations.map((locations) => {
        return (
          <CircleMarker
          color="#00cc00"
            // key={k}
            center={[locations["latitude"], locations["longtitude"]]}
            // radius={20 * Math.log(city["population"] / 10000000)}
            fillOpacity={0.8}
            stroke={false}
          >
            <Tooltip direction="top" offset={[-8, -2]} opacity={1}>
              <div>
                <span>{"Name: "+locations["name"]}</span>
              </div>
              <div>
                <span>{"Residents: "+locations["totalevac"]}</span>
              </div>
              <div>
                <span>{"Capacity: "+locations["capacity"]}</span>
              </div>

            </Tooltip>
          </CircleMarker>
        );
      })}
    </MapContainer>
  </div>
  );
};

export default PolyLine;