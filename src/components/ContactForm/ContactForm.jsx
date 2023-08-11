import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='form-container'>
      <h1>Send us a message! </h1>
      <form action="">
        <input autoComplete='off' placeholder='Name' type="text" />
        <input autoComplete='off' placeholder='Email' type="email" />
        <input autoComplete='off' placeholder='Subject' type="text" />
        <textarea autoComplete='off' placeholder='Message' rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
