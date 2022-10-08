import React from 'react'
import '../styles/navigation.css'
import logo from '../images/RVS-logo.jpg'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
        <div className='navigation__logo'>
          <img 
            src={logo}
            alt='Rapid van solutions logo'
          />
        </div>
        <ul className='navigation__list'>
            <li>Welcome
            </li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation