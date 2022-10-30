import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='nav'>
      <Link className='navtxt'to='/'><span >Home</span></Link>
      <Link className='navtxt' to='gallery'><span >Explore</span></Link>
      <Link className='navtxt' to='liked'><span >Collection</span></Link>
      <Link className='navtxt' to='wildfire'><span >WildFire</span></Link>
    </div>
  )
}

export default NavBar
