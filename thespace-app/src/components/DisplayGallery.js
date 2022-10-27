import React from "react";
import { useDispatch } from "react-redux";
import { setlikedlist } from "../slices/likedSlice";
import { useSelector } from "react-redux";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBIcon,
} from "mdb-react-ui-kit";

function DisplayGallery({ pictures }) {
  const { likeddata } = useSelector((state) => state.liked);
  const dispatch = useDispatch();
  const alreadyLiked = (pic) => {
    let findItem = likeddata?.find((item) => item.title === pic.title);
    return findItem ? true : false;
  };

  return (
    <div className="container">
      {pictures?.map((pic, i) => {
        const isliked = alreadyLiked(pic);
        return (
          <MDBCard key={i}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <div className="eachcard">
                <MDBCardImage
                  className="image"
                  src={pic.url}
                  fluid
                  alt={pic.title}
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
                <MDBCardBody>
                  <MDBCardTitle>{pic.title}</MDBCardTitle>
                  {isliked ? (
                    <MDBBtn flat>
                      <MDBIcon icon="thumbs-up" className="cyan-text" />
                    </MDBBtn>
                  ) : (
                    <MDBBtn onClick={() => dispatch(setlikedlist(pic))}>
                      Like
                    </MDBBtn>
                  )}
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
