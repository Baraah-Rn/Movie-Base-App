import React from 'react'
import { Link } from 'react-router-dom'
const Header = ({ title }) => {
  return (
    <div className='col '>
      <ul className='header'>
        <li className='header-title'> </li>
        <li><Link className='header-link' to={'/shows'}>TV Shows</Link></li>
        <li><Link className='header-link' to={'/movies'}>Movies</Link></li>
        <li><Link className='header-link' to={'/favorites'}>My List</Link></li>
        
      </ul>
     
    </div>
  )
}

export default Header