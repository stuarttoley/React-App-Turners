import React from 'react'

import Carousel from 'react-elastic-carousel'
import Item from './Item'

import Poster from './poster.jpg'
import Lambo from './lambo.jpg'
import Corolla from './corolla.jpg'
import Mazda from './mazda.jpg'
import Van from './van.jpg'
import Volvo from './volvo.jpg'
import Merc from './merc.jpg'
import Porsche from './porsche.jpg'

import './Home.css'


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

function Home() {
  return (
    <div className='home-container'>
        <div className='poster'>

           

            <img src={Poster} alt='' /> 
        
        </div> 

        <div className='go-round'>

            <p>Recommended Cars for yous</p>

            <Carousel breakPoints={breakPoints}>
                <Item>
                    <div>
                    <img src={Lambo} alt=''/><p>Lamborghini Aventador</p>
                    </div>
                    </Item>
                <Item>
                    <div>
                    <img src={Corolla} alt=''/><p>Toyota Corolla</p>
                    </div>
                </Item>
                <Item>
                    <div>
                    <img src={Mazda} alt=''/><p>Mazda Demio</p>
                    </div>
                </Item>
                <Item>
                    <div>
                    <img src={Merc} alt=''/><p>Mercedes-Benz</p>
                    </div>
                </Item>
                <Item>
                    <div>
                    <img src={Volvo} alt=''/><p>Volvo</p>
                    </div>
                </Item>
                <Item>
                    <div>
                    <img src={Van} alt=''/><p>Volkswagon</p>
                    </div>
                </Item>
                <Item>
                    <div>
                    <img src={Porsche} alt=''/><p>Mercedes-Benz GLA</p>
                    </div>
                </Item>
                
            </Carousel>
            
        </div>  
    </div>
  )
}

export default Home