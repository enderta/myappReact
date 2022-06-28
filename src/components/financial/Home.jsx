import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Testimonial from './Testimonial'
import Demo from './Demo'
import Footer from './Footer'
import { Router,Route,Routes } from 'react-router-dom'

const Home = () => {
  return (<>
    <Navbar/>
    <Hero/>
    <About/>
    <Testimonial/>
    <Demo/>
    <Footer/>
  </>)
}

export default Home