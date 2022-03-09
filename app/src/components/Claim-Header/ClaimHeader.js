import React from 'react'

import { Link } from 'react-router-dom'
import './ClaimHeader.css'

import logo from './logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'


function ClaimHeader() {
  return (
    <div>
        <div className='claim-top-text'>
            
              
        
        </div>
        <div className='claim-bot-text'>
           <Link to='/'>
           <img src={logo} alt=''/>
           </Link>

            <div className='claim-btn-nav'>
                <button id='cnum'><FontAwesomeIcon icon={faPhone} /> 0800 887 637</button> 
                <button id='cnum'><FontAwesomeIcon icon={faLocation} /> Find us</button> 
                <button id='csym'> 中文</button>
            </div> 
        </div> 

        <div className='claim-title'>
            <h1>Claim Insurance</h1> 
        </div>
    </div>
  )
}

export default ClaimHeader