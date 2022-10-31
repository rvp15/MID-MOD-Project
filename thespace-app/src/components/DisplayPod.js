import React from "react";

function DisplayPod({ podphoto }) {
  console.log(podphoto)
  return (
    <div className="displayphoto">
      <h1>NASA Picture Of The Day</h1>
  
      <img className="imagepod" src={podphoto.url} alt={podphoto.title} /> <br />
         <h3>{podphoto.title}</h3>
      <p className="description">{podphoto.explanation}</p>
      <footer className="footer">
      <p>All Content are taken from NASA open source API - Copyright&#169; NASA </p>
       <span>- Designed By Priya</span>
      </footer>
    </div>
  );
}

export default DisplayPod;
