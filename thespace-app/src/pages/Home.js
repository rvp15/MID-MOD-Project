import React from 'react'
// import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DisplayPod from '../components/DisplayPod';
import { setpod } from '../slices/podSlice';
import { useDispatch } from 'react-redux'
import DisplayBetween from '../components/DisplayBetween';

function Home() {

const apiKey = process.env.REACT_APP_API
const dispatch = useDispatch()
// let [pod ,setPod] = useState({})
const {pod} = useSelector((state)=> state.pod)


const getPictureOfDay = async()=>{
  try{
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    const podresponse =  await response.json();
    console.log(podresponse)
    dispatch(setpod(podresponse))
  }catch(e){
    console.log(e)
  }
}
useEffect(()=>{
getPictureOfDay()
},[])
 
  return (
    <div>
   <DisplayPod podphoto={pod}/>
   <DisplayBetween/>
    </div>
  )
}

export default Home
