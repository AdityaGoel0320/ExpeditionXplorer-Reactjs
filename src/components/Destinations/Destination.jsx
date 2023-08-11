import React from 'react'
import './Destinations.css'
import som1 from '../../assets/Somnath1.jpg'
import som2 from '../../assets/Somnath2.jpg'
import tm1 from '../../assets/tm1.jpg'
import tm2 from '../../assets/tm2.jpg'

const Destination = () => {
  return (
    <div className="destinations">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame</p>
        <div className="first-des">
            <div className="des-text">
                <h2>Vaishno Devi Temple, Jammu and Kashmir</h2>
                <p>Perched atop the Trikuta Mountains in Jammu and Kashmir, Vaishno Devi Temple is a revered Hindu shrine dedicated to Goddess Vaishno Devi. Pilgrims undertake a challenging trek to seek blessings and fulfillment of wishes. The divine aura, picturesque surroundings, and devotion-infused atmosphere make it a spiritual haven amidst nature's splendor.</p>
            </div>
            
            <div className="image">
                <img className='z' src={som1} alt="img" />
                <img src={som2} alt="img" />
            </div>
        </div>
        <div className="second-des">
            <div className="image2">
                <img src={tm1} alt="img" />
                <img src={tm2} alt="img" />
            </div>
            <div className="des-text">
                <h2>Akshardham Temple, Delhi</h2>
                <p>Akshardham Temple in Delhi is a masterpiece of art, spirituality, and culture. Its intricate architecture showcases India's rich heritage, while exhibitions depict values and history. A serene boat ride and breathtaking light and sound show engage visitors. It stands as a modern marvel that unites tradition and technology harmoniously.</p>
            </div>
        </div>

    </div>
  )
}

export default Destination
