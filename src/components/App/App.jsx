import React from 'react'
import './App.css'
import Home from "../../routes/Home/Home"
import About from "../../routes/About/About"
import Services from "../../routes/Services/Services"
import Contact from "../../routes/Contact/Contact"
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route exact element={<About />} path="/about" />
        <Route exact element={<Services />} path="/service" />
        <Route exact element={<Contact />} path="/contact" />
      </Routes>
    </div>
  )
}

export default App
