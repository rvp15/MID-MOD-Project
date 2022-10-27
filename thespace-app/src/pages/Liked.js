import React from 'react'
import { useSelector } from "react-redux";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';


function Liked() {

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
        <MDBBtn>Remove</MDBBtn>
        </MDBCardBody>
      </div>
      </MDBCard> 
       )
      })}
    </div>
  )
}

export default Liked
