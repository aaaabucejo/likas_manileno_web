import React, { Component } from "react";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
});

function Geocode() {
        const map = this.leafletMap.leafletElement;
        const searchControl = new ELG.Geosearch().addTo(map);
        const results = new L.LayerGroup().addTo(map);
    
        searchControl.on("results", function(data) {
          results.clearLayers();
          for (let i = data.results.length - 1; i >= 0; i--) {
            results.addLayer(L.marker(data.results[i].latlng));
          }
        });
      
        const center = [37.7833, -122.4167];

  return (
    <div>
        <MapContainer
        style={{ height: "100vh" }}
        center={center}
        zoom="10"
        ref={m => {
          this.leafletMap = m;
        }}
      >
        <TileLayer
          attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
          url={"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        />
        <div className="pointer" />
      </MapContainer>
    </div>
  )
}

export default Geocode