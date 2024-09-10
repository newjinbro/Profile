import React, { useState } from 'react'
import './navbar.css'
import { MobileNav } from './MobileNav/MobileNav';


export const Navbar = () => {
    const[openMenu, setOpenMenu]=useState(false);
    const tooglemenu=()=>{
        setOpenMenu(!openMenu)
    }
  return (
    <>
    <MobileNav isOpen={openMenu} tooglemenu={tooglemenu}/>
    <nav className="nav-wrapper">
        <div className="nav-content">
            <h1 className="logo">Portfolio</h1>
            <ul>
                <li>
                    <a className="menu-item">Home</a>
                </li>
                <li>
                    <a className="menu-item">Skills</a>
                </li>
                <li>
                    <a className="menu-item">Course</a>
                </li>
                <li>
                    <a className="menu-item">Contact Me</a>
                </li>
                <button className='contact-btn'>Resume</button>
            </ul>
            <button className="menu-btn" onClick={tooglemenu}>
                <span
                style={{
                    fontSize:"1.8rem"
                }}
                >
                  {openMenu ? "X" :"="}  
                </span>
                
            </button>
        </div>
    </nav>
    </>
  )
}
