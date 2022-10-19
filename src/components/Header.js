import React from 'react'
import logo from '../images/IP.png'
import Date from './Date'

export default function Header() {
  return (
    <header className='header'>
        <div>
          <img src={logo}  className='logo' alt='logo'/>
        </div>
        <ul className='headerList'>
            <li>Home</li>
            <li>Weather</li>
            <li>Contact</li>
            <Date />
        </ul>
        
    </header>
  )
}
