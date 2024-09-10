import React from 'react'
import './mobileNav.css'

export const MobileNav = ({isOpen,tooglemenu}) => {

  return (
    <div className={`mobile-menu ${isOpen? "active" :""}`}
    onClick={tooglemenu}
        >
            <div className="mobile-menu-container">
                <h1 className="logo">Portfolio</h1>
                <ul>
                    <li>
                        <a  className="menu-item"> Home</a>
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
            </div>
        </div>
  )
}
