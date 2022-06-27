import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import "./paralel.css"
import "../src/img"




const ImageOne = () => {
  return (
    <>
    <ParallaxProvider>
    <Parallax className='image' blur={0} bgImage={nasa1} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">a trip to Space</span>
        </div>
    </Parallax>
    </ParallaxProvider>

    </>
   
  )
}

export default ImageOne