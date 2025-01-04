import React from 'react'
import logo from '../../assets/logo.png'
import '../../component/navbar/navbar.css'


function Navbar() {
  return (
    <>
    
    <nav id='navbar'>
        <div>
    <img src={logo}alt="" /></div>
    <ul>
        <span id='span'>
        <li>Home</li>
         <li>Reservation </li> 
        </span>
        <li>Menu</li>
        <li>Blogs</li>
        <li>Pages</li>
        <li>Get Pro</li>
    </ul>
    </nav>
   
    </>
  )
}

export default Navbar


