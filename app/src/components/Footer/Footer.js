import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faHouseChimney, faPaste } from '@fortawesome/free-solid-svg-icons'

import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='copyright'>
            <p>©2022 Turners</p>

        </div>

        <div className='footer-content'>
            <button><FontAwesomeIcon icon={faHouseChimney} /><p>Branch Details</p></button>
            <button><FontAwesomeIcon icon={faFacebook} /><p>Facebook</p></button>   
            <button><FontAwesomeIcon icon={faPaste} /><p>Newsletter</p></button>   
            <button><FontAwesomeIcon icon={faEnvelopeSquare} /><p>Email Alerts</p></button>   
            <button><FontAwesomeIcon icon={faInstagram} /><p>Instagram</p></button>       
        </div>  
    </div>
  )
}

export default Footer