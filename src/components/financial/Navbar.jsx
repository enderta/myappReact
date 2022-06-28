import React,{useState} from 'react'
import logo from "./images/logo.png"
import {FaBars,FaTimes} from 'react-icons/fa'
import "./Navbar.css"
import { Router,Link } from 'react-router-dom'

const Navbar = () => {
  const [click,setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (

<div className='header'>
    <nav className='navbar'>
      <a href='/' className='logo'>
        <img src={logo} alt='logp'/>
      </a>
      
      <div className='hamburger' onClick={handleClick}>
        {click? (<FaTimes style={{color: "#ffffff"}}/>):(<FaBars size={30} style={{color: "#ffffff"}}/>)}
      </div>
      <ul className={click?'nav-menu active':"nav-menu"}>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-link'>About</Link>
        </li>
        <li className='nav-item'>
          <Link to='/testimonial' className='nav-link'>Testimonial</Link>
        </li>
        <li className='nav-item'>
          <Link to='/demo' className='nav-link'>Demo</Link>
        </li>
        </ul>
          
    </nav>
    </div>
    
    
  )
}

export default Navbar