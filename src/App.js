import React, { useEffect } from 'react'
import { Route,Router,Routes,Link } from 'react-router-dom'
import Home from './components/financial/Home'
import AboutUs from './components/financial/routes/AboutUs'
import TestimonialUs from './components/financial/routes/TestimonialUs'
import DemoUs from './components/financial/routes/DemoUs'






const App = () => {
 
  return (
<>
<Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<AboutUs />}/>
      <Route path='/testimonial' element={<TestimonialUs />}/>
      <Route path='/demo' element={<DemoUs />}/>
    </Routes>
</>
   
    
  
   
  )
}

export default App