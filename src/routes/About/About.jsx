import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import AboutImg from '../../assets/3.jpg'
import Footer from '../../components/Footer/Footer'
import AboutUs from '../../components/AboutUs/AboutUs'


const About = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        text=""
        buttonText=""
        url=""
        btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default About
