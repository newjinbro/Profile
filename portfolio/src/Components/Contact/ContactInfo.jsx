import React from 'react'
import "./ContactInfo.css"
import Git from '../../asset/git.png'
import email from '../../asset/email.png'

export const ContactInfo = ({iconUrl,text}) => {
  return (
    <div className="contact-card">
        <div className="icon">
            <img src={iconUrl} alt={text} />
        </div>
        <p>{text}</p>
    </div>
  )
}
