// import { useState } from "react";
import React, { useState } from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

 
function SearchBar(props) {
    const { selectPosition, setSelectPosition } = props;
    const [searchText, setSearchText] = useState("");
    const [listPlace, setListPlace] = useState([]);

    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    // const [open, setOpen] = React.useState(false);
    

    // const [lat, setLat] = useState(null);
    // const [lng, setLng] = useState(null);
    // const [status, setStatus] = useState(null);

    // const getLocation = () => {
    //     if (!navigator.geolocation) {
    //       setStatus('Geolocation is not supported by your browser');
    //     } else {
    //       setStatus('Locating...');
    //       navigator.geolocation.getCurrentPosition((position) => {
    //         setStatus(null);
    //         setLat(position.coords.latitude);
    //         setLng(position.coords.longitude);
    //       }, () => {
    //         setStatus('Unable to retrieve your location');
    //       });
    //     }
    //   }

    // const handleClose = () => {
    //   setOpen(false);
    // };

  return (
    
//     <div className="App">
//     <button onClick={getLocation}>Get Location</button>
//     <h1>Coordinates</h1>
//     <p>{status}</p>
//     {lat && <p>Latitude: {lat}</p>}
//     {lng && <p>Longitude: {lng}</p>}
//   </div>

    <div>
  
    {/* search bar */}
      <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <OutlinedInput
            style={{ width: "100%" }}
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", padding: "0px 20px" }}
        >
          <SearchSharpIcon
            variant="contained"
            color="primary"
            onClick={() => {
              // Search
              const params = {
                q: searchText,
                format: "json",
                addressdetails: 1,
                polygon_geojson: 0,
              };
              const queryString = new URLSearchParams(params).toString();
              const requestOptions = {
                method: "GET",
                redirect: "follow",
              };
              fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                  // console.log(JSON.parse(result));
                  setListPlace(JSON.parse(result));
                })
                .catch((err) => console.log("err: ", err));
            }}
          >
            Search
          </SearchSharpIcon>
          <div>
          <TextField
          id="outlined-read-only-input"
          label={lat}
          defaultValue={lat}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={long}
          defaultValue={long}
          InputProps={{
            readOnly: true,
          }}
        />
          </div>
        </div>
      </div>
      <div>
        <List component="nav" aria-label="main mailbox folders">
        {/* list ng baba sa search */}
          {listPlace.map((item) => {
            return (
              <div key={item?.place_id}>
                <ListItem
                  button
                  onClick={() => {
                    // setSelectPosition(item);
                    // console.log(item.lat,item.lon)
                    setLat(item.lat)
                    setLong(item.lon)
                    console.log(item.display_name)
                    // setOpen(false);
                  }}
                >
                  <ListItemIcon>
                    <img
                      src="./pin.png"
                      alt="Placeholder"
                      style={{ width: 30, height: 30 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </div>
    </div>
    </div>
  )
}

export default SearchBar