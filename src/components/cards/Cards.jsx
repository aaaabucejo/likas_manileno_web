import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./cards.scss"

import {useState,useEffect} from 'react';
import axios from "axios";

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

function Cards() {

  //users
  const[totaldata,setTotaldata,] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
        axios.post('https://likasmanileno-api.onrender.com/app/getUsers')
            .then(res => {
                // console.log(res);
                setTotaldata(res.data.length);
            }).catch(err => {
                console.log(err);
            })
    };
    fetchPosts();
}, []);

  //seniors
  const[totalsenior,setTotalSenior] = useState(null)
  useEffect(() => {
    const fetchPosts = async () => {
        axios.post('https://likasmanileno-api.onrender.com/app/getUsers')
            .then(res => {
                const total = res.data.filter((tl) => tl.age >= 60);
                setTotalSenior(total.length)
                // console.log(res)
                // console.log(total.length)
                
            }).catch(err => {
                console.log(err);
            })
    };
    fetchPosts();
}, []);

//families
const[totalfam,setTotalFam] = useState([])
useEffect(() => {
  const fetchPosts = async () => {
      axios.post('https://likasmanileno-api.onrender.com/app/getUsers')
          .then(res => {
           setTotalFam(res.data)    
          //  console.log(res.data)         
          }).catch(err => {
              console.log(err);
          })
  };
  fetchPosts();
}, []);

//sites
const[totalsite,setTotalSite] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
        axios.post('https://likasmanileno-api.onrender.com/app/getlocation')
            .then(res => {
                // console.log(res);
                setTotalSite(res.data.length);
            }).catch(err => {
                console.log(err);
            })
    };
    fetchPosts();
}, []);

  return (
    <div className='cards'>
        <div className='cardData'>
        <Card sx={{ minWidth: 275, minHeight: 150, backgroundColor: '#0047AB' }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: 600,minHeight: 45, color:'#fff' ,paddingLeft: 8}}>
          Number of Citizen
        </Typography>
        <Typography variant="body2" sx={{fontWeight: 600, fontSize: 45, paddingLeft: 19, color:'#fff'}}>
          {totaldata}
        </Typography>
      </CardContent>
    </Card>
    {/*  */}
    <Card sx={{ minWidth: 275, minHeight: 150, backgroundColor: '#0047AB' }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: 600,minHeight: 45, color:'#fff' ,paddingLeft: 8}}>
          Number of Seniors
        </Typography>
        <Typography variant="body2" sx={{fontWeight: 600, fontSize: 45, paddingLeft: 19, color:'#fff'}}>
          {totalsenior}
        </Typography>
      </CardContent>
    </Card>
     {/*  */}
     <Card sx={{ minWidth: 275, minHeight: 150, backgroundColor: '#0047AB' }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: 600,minHeight: 45, color:'#fff' ,paddingLeft: 8}}>
          Number of Families
        </Typography>
        <Typography variant="body2" sx={{fontWeight: 600, fontSize: 45, paddingLeft: 19, color:'#fff'}}>
          {[...new Set(totalfam.map((ln)=>ln.lastName.toLowerCase()))].length}
        </Typography>
      </CardContent>
    </Card>
     {/*  */}
     <Card sx={{ minWidth: 275, minHeight: 150, backgroundColor: '#0047AB' }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: 600,minHeight: 45, color:'#fff' ,paddingLeft: 7}}>
          Number of Evacuation
        </Typography>
        <Typography variant="body2" sx={{fontWeight: 600, fontSize: 45, paddingLeft: 19, color:'#fff'}}>
          {totalsite}
        </Typography>
      </CardContent>
    </Card>
    </div>

    </div>
  )
}

export default Cards