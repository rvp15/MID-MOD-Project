import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='nav'>
      <Link className='navtxt'to='/'><span >Home</span></Link>
      <Link className='navtxt' to='gallery'><span >Gallery</span></Link>
    </div>
  )
}

export default NavBar
