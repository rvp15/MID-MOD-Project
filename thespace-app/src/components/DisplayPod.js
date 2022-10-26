import React from 'react'

function DisplayPod({podphoto}) {
  return (
    <div className='displayphoto'>
       <h1 >NASA Picture Of The Day</h1>
        <h2>{podphoto.title}</h2>
    <img className='imagepod' src={podphoto.url} alt={podphoto.title}/>
    <p className='description'>{podphoto.explanation}</p>
    </div>
  )
}

export default DisplayPod
