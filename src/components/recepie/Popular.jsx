import { wait } from '@testing-library/user-event/dist/utils'
import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

export const Popular = () => {
  const [popular, setPopular] = useState([])

 useEffect(() => {
  getPopular()
  }, []) 
    const apiKey="1a2e0f31646b441480610dfb2f607c71"
     const getPopular= async () => {
      const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`)
        const data=await api.json()
        console.log(data)
        setPopular(data.recipes) 

    }
    
  return (
    <div>
    <Splide>
  {
    popular.map((item,index) => {
     
      return (
       
         
            <SplideSlide>
            <Wrapper key={index}>
        <Card>
        <h1>{item.title}</h1>
          <img src={item.image} alt=""/>
        </Card>
         
        </Wrapper>
            </SplideSlide>
          
       
       
      )
    
    }
    )
  }
  </Splide>

    </div>
  )
}

const Wrapper=styled.div`
margin:4rem 0rem;
`
const Card=styled.div`
min-height:20rem;
width:20rem;
margin:0rem 1rem;
border-radius:1rem;
background-color:white;
box-shadow:0rem 0rem 1rem black;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
img{
  border-radius:2rem;
}
`

export default Popular
