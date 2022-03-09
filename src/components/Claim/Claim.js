import React from 'react'

import './Claim.css'
import slogo from './slogo.png'

import { Link } from 'react-router-dom'

function Claim() {
  return (
    <div className='claim-container'>
        
        <div className='login-card'>

            <div className='title-card'>
              <h5>My Turners Cars</h5>   
              <h2>Client Account</h2>    

            <div className='circle'></div>
            </div>

            <div className='card-content'>
                <img src={slogo} alt=''/>
                <p>For the best mobile experience download the <a id='app'>Turners Mobile App</a></p> 
            </div> 

            <div className='form'>
                <input type='text' placeholder='Email' /> <br/>
                <input type='text' placeholder='Password' /> <br/>
                <Link to='/howto'>
                <button type='submit' value='Login'id='login-btn' >Login</button> 
                </Link> 
                
            </div>

        </div>
    
    
    
    </div>
  )
}

export default Claim