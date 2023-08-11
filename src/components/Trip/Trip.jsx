import React, { useState } from 'react'
import './Trip.css'
import TripData from './TripData'
import Assam from "../../assets/Assam.jpg"
import Varanasi from "../../assets/Varanasi.jpg"
import Srinagar from "../../assets/Srinagar.jpg"


const Trip = () => {

  return (

    <>
     
      <div className='trip'>
        <h1>Recent Trips</h1>
        <p>The previous Destinations we visited</p>
        <div className='tripcard'>
          <TripData
            image={Assam}
            heading="Trip to Amritsar, Punjab"
            text="Amritsar, Punjab, is a revered city housing the Golden Temple, Sikhism's holiest shrine. The temple's glistening gold architecture reflects serenely on the surrounding pool, attracting pilgrims and tourists alike. Amritsar's cultural tapestry is interwoven with Sikh traditions and Punjabi warmth, creating an oasis of spiritual devotion and heartfelt hospitality."
          />
          <TripData
            image={Varanasi}
            heading="Trip to Leh-Ladakh"
            text="Leh-Ladakh, Jammu and Kashmir, captivates with its awe-inspiring terrain: lofty deserts, crystalline lakes, and ancient monasteries. Set against the Himalayas, its rugged beauty offers adventure and serenity. The monasteries stand as cultural treasures, echoing with the whispers of spirituality amid the breathtaking vistas of this high-altitude wonderland."
          />
          <TripData
            image={Srinagar}
            heading="Trip to Kedarnath"
            text="Nestled in the Himalayas, Kedarnath is a sacred pilgrimage site in Uttarakhand, India. The Kedarnath Temple, dedicated to Lord Shiva, exudes spiritual energy against a dramatic backdrop. Pilgrims undertake a strenuous journey to seek divine blessings, forging a deep connection with nature and religion in this remote mountain sanctuary."
          />
        </div>
      </div>
    </>
  )
}


export default Trip
