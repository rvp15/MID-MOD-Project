import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setremoveliked } from "../slices/likedSlice";

import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';


function Liked() {
  const dispatch = useDispatch();
  const {likeddata} = useSelector((state)=>state.liked)
console.log(likeddata)

  return (
    <div className='likedcontainer'>
      {likeddata?.map((item)=>{
       return(
        <MDBCard>
        <div className="eachcardliked" >
        <MDBCardImage className="image" src={item.url} position='top'/>
        <MDBCardBody>
        <MDBCardText>{item.title}</MDBCardText>
        <MDBBtn onClick={() => dispatch(setremoveliked(item))}>Remove</MDBBtn>
        </MDBCardBody>
      </div>
      </MDBCard> 
       )
      })}
    </div>
  )
}

export default Liked
