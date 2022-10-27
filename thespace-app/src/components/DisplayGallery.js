import React from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  // MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

function DisplayGallery({ pictures }) {
    const handleSave =()=>{
        
    }
  return (
    <div className="container">
     
        {pictures?.map((pic,i) => {
          return (
               <MDBCard>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <div className="eachcard" key={i}>
                    <MDBCardImage  className="image" src={pic.url} fluid alt={pic.title} />
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                    <MDBCardBody>
                      <MDBCardTitle>{pic.title}</MDBCardTitle>
                      <MDBBtn onClick={handleSave}>Save</MDBBtn>
                    </MDBCardBody>
                  </div>
                </MDBRipple>
              </MDBCard> 
          
          );
        })}
     
    </div>
  );
}

export default DisplayGallery;
