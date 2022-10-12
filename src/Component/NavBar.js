import React from 'react'
import { Link } from 'react-router-dom'





const NavBar = ({ title }) => {
  return (
      <div className='nav-container'>
        <h2 className='page-title'>{"Movies Base"}</h2>
        <div className='nav-link-container'>
          <Link className='nav-link' to={'/home'}>Home</Link>
          <Link className='nav-link' to={'/favorites'}>My List</Link>
          <Link className='nav-link' to={'/'}>Sign out</Link>
        
        </div>
        </div>
  )
}

export default NavBar