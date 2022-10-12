import React from 'react'
import { Link } from 'react-router-dom'
import  Logo from "../img/Logo.PNG"
import SearchBox from './SearchBox'


const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-link-container'>
        <Link className='nav-link' to={'/home'}>Home</Link>
        <Link className='nav-link' to={'/favorites'}>My List</Link>
      </div>
     
    </div>
  )
}

export default NavBar