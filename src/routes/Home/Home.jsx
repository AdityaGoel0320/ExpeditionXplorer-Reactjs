import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import HeroImg from '../../assets/2.jpeg'
import Destination from '../../components/Destinations/Destination'
import Trip from '../../components/Trip/Trip'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HeroImg}
        title="New Journey , New Story"
        text="Choose Your Favourite Destination"
        buttonText="Explore"
        url="/"
        btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Home
