import React from 'react'
import { Card,Image} from 'react-bootstrap';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import "./star.css";
export const StarWars = () => {
    const ZoomInScrollOut=batch(StickyIn(),FadeIn());
    const FadeUp=batch(Fade(),Sticky(),Move());
  return (
    <div>
        <ScrollContainer>
        <ScrollPage page={0}>
            <Animator animation={batch(Sticky(),Fade(),MoveIn(0, 200))}>
           <Card className='card'>
            <Card.Body>
                <Card.Title>Star Wars</Card.Title>
                <Image  assName='img' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/510f4632-aef4-494e-bfbb-f24a814ed96b/d577xq-9d3e8a55-7d0a-4bda-985d-2496489bf59d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMGY0NjMyLWFlZjQtNDk0ZS1iZmJiLWYyNGE4MTRlZDk2YlwvZDU3N3hxLTlkM2U4YTU1LTdkMGEtNGJkYS05ODVkLTI0OTY0ODliZjU5ZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ._G8A-c2iFIx3slTXAu3nHntn9U9VLMXHeNFliLEGK2E" alt="logo" className="logo"/>  
            </Card.Body>

           </Card >
            </Animator>
            </ScrollPage>
            <ScrollPage page={0}>
            <Animator animation={batch(Sticky(),Fade(),MoveIn(0, 200))}>
           <Card  className='card'>
            <Card.Body>
                <Card.Title>Star Wars</Card.Title>
               
                <Image assName='img' src="https://images4.alphacoders.com/814/81446.jpg" alt="logo" className="logo" />
                
            </Card.Body>

           </Card>
            </Animator>
            </ScrollPage>
            <ScrollPage page={0}>
            <Animator animation={batch(Sticky(),Fade(),MoveOut(0, -200))}>
           <Card  className='card'>
            <Card.Body>
                <Card.Title>Star Wars</Card.Title>
                <Image className='img' src='https://images5.alphacoders.com/419/419917.jpg' alt="logo" className="logo" />  
            </Card.Body>

           </Card>
            </Animator>
            </ScrollPage>
             <ScrollPage page={0}>
            <Animator animation={batch(Sticky(),Fade(),MoveOut(0, -200))}>
           <Card  className='card'>
            <Card.Body>
                <Card.Title>Star Wars</Card.Title>
                <Image className='img' src='https://images2.alphacoders.com/191/19102.png' alt="logo" className="logo" />  
            </Card.Body>

           </Card>
            </Animator>
            </ScrollPage>
        </ScrollContainer>
                

    </div>
  )
}
