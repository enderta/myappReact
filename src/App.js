import React, { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import Navbar from './components/financial/Navbar'
import Hero from './components/financial/Hero'
import About from './components/financial/About'
import Testimonial from './components/financial/Testimonial'
import Footer from './components/financial/Footer'
import Demo from './components/financial/Demo'





const App = () => {
 
  return (
 
    <>
    <Navbar />
    <Hero />
    <About />
    <Testimonial />
    <Demo />
    <Footer/>

        </>
   
  )
}

export default App