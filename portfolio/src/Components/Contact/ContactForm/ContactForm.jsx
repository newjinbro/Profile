import React from 'react'
import './contactForm.css'

export const ContactForm = () => {
  return (
    <div className="contact-form-content">
        <form>
            <div className="name-container">
                <input type="text" name='firstname' placeholder='FirstName' />
                <input type="text" name='lastname' placeholder='LastName' />
            </div>
            <input type="email" name="email" placeholder='Email'/>
            <textarea name="message" type="text" placeholder='Message' rows={3}/>
            <button>SEND</button>
        </form>
    </div>
  )
}
