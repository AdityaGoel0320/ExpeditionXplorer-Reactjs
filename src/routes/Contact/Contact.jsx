import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import ContactImg from '../../assets/4.jpg'
import Footer from '../../components/Footer/Footer'
import ContactForm from '../../components/ContactForm/ContactForm'


const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        text=""
        buttonText=""
        url=""
        btnClass="hide"
      />
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact
