import React from 'react'

function DisplayGallery({pictures}) {

  return (
    <div className='gallery-container'>
        {pictures?.map((pic)=>{
            return(
                <div>
                    <img className='gallimg' src={pic.url} alt={pic.title}/>
                     <h3>{pic.title}</h3>
                </div>
            )
        })}
      
    </div>
  )
}

export default DisplayGallery
