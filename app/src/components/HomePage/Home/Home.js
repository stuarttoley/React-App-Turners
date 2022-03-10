import React from 'react'

import Carousel from 'react-elastic-carousel'


import Poster from './poster.jpg'
import Lambo from './lambo.jpg'
import Corolla from './corolla.jpg'
import Mazda from './mazda.jpg'
import Van from './van.jpg'
import Volvo from './volvo.jpg'
import Merc from './merc.jpg'
import Porsche from './porsche.jpg'
import Car from './car.jpg'

import './Home.css'


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 7 },
    { width: 1200, itemsToShow: 5 },
  ];

function Home() {
  return (
    <div className='home-container'>
        <div className='poster'>

           

            <img src={Poster} alt='' /> 
        
        </div> 

        <div className='go-round'>

            <p>Recommended Cars for you</p>

            <Carousel breakPoints={breakPoints}>
            
                    <div className='merry'>
                    <img src={Lambo} alt=''/><p>Lamborghini Aventador</p>
                    </div>
                    
            
                    <div className='merry'>
                    <img src={Corolla} alt=''/><p>Toyota Corolla</p>
                    </div>
                
            
                    <div className='merry'>
                    <img src={Mazda} alt=''/><p>Mazda Demio</p>
                    </div>
                
            
                    <div className='merry'>
                    <img src={Merc} alt=''/><p>Mercedes-Benz</p>
                    </div>
                
            
                    <div className='merry'>
                    <img src={Volvo} alt=''/><p>Volvo</p>
                    </div>
                
            
                    <div className='merry'>
                    <img src={Van} alt=''/><p>Volkswagon</p>
                    </div>
                
            
                    <div className='merry'>
                    <img src={Porsche} alt=''/><p>Mercedes-Benz GLA</p>
                    </div>

                    <div className='merry'>
                    <img src={Car} alt=''/><p>Nissan Skyline</p>
                    </div>

                    <div className='merry'>
                    <img src={Corolla} alt=''/><p>Toyota Corolla</p>
                    </div>
                
                
            </Carousel>
            
        </div>  
    </div>
  )
}

export default Home