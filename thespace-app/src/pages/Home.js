import React from "react";
// import { useState } from 'react';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import DisplayPod from "../components/DisplayPod";
import { setpod } from "../slices/podSlice";
import { useDispatch } from "react-redux";

function Home() {
  const apiKey = process.env.REACT_APP_API;
  const dispatch = useDispatch();

  //useSelector:Allows you to extract data from the Redux store state,
  const { podData } = useSelector((state) => state.pod); 

  const getPictureOfDay = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const podresponse = await response.json();
      console.log(podresponse);
      //Dispatch is the function of Redux Store, called to dispatch an action
      //You can connect store using dispatch only to change the state
      dispatch(setpod(podresponse));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPictureOfDay();
  }, []);

  return (
    <div>
      <DisplayPod podphoto={podData} />
    </div>
  );
}

export default Home;
