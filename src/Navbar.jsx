import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import { CgSearchFound } from 'react-icons/cg';


function Navbar() {

    const [click,setClick] =useState(false)
    const handleClick=()=> setClick(!click)

    
  return (
    <div className="header" >
      <div className='search'>
        <Link to='/HomePage' id='lost'>Lost & Found  </Link> 
        <CgSearchFound id='search'/>
      </div>
      <ul className={click?'nav-menu active':'nav-menu'}>
       
        <li>
            <Link to='/add'>Add items</Link>
        </li>
        <li>
            <Link to='/returned'>Returned items</Link>
        </li>
        <li>
            <Link to='/lost'>Lost items </Link>
        </li>
        <li>
            <Link to="/found"> Found items</Link>
        </li>
        <li>
            <Link to="/received">Received rewards</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? ( <FaTimes size={40} style={{color:'#fff'}}/>):(  <FaBars size={40} style={{color:'#fff'}}/>)}
       
      
      </div>
    </div>
  )
}

export default Navbar