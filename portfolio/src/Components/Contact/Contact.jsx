import React from 'react'
import './contact.css'
import { ContactInfo } from './ContactInfo'
import Git from '../../asset/git.png'
import email from '../../asset/email.png'
import { ContactForm } from './ContactForm/ContactForm'

export const Contact = () => {
  return (
    <section className="contact-container">
        <h4>Contact Me</h4>

        <div className="contact-content">
            <div style={{flex:1}}>
                <ContactInfo
                 iconUrl={email}
                 text="newjinbro2000@gmail.com"
                />
                 <ContactInfo
                 iconUrl={Git}
                 text="https://github.com/newjinbro/b.git"
                />

            </div>
            <div style={{flex:1}}>
              <ContactForm/>
            </div>

        </div>
    </section>
  )
}
