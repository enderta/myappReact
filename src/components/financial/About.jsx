import React from 'react'
import jhon from './images/john-doe.png'
import "./About.css"

const About = () => {
  return (
    <div className='about'>
    <div className='container'>
    <img src={jhon} alt='jhon'/>
    <div className='col-2'>
    <h2>About Us</h2>
    <span className='line'></span>
    <p>Lorem ipsum dolor.</p>
    <p>Lorem ipsum dolor.</p>
    <button className='button'>free consultation</button>
    </div>
    </div>

    </div>
  )
}

export default About