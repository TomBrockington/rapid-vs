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
            <li>
              <NavLink activeClassName="info_container" to='/' >Home</NavLink>
            </li>
            <li>Middle</li>
            <li>Bottom</li>
        </ul>
    </nav>
  )
}

export default Navigation