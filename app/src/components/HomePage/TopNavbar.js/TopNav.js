import React, {useState} from 'react'
import './TopNav.css'
import logo from './logo.png'

import LoginModal from '../Modal/LoginModal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'

function TopNav() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
        <div className='top-text'>
            
              
        
         </div>
       <div className='bot-text'>
           
           <img src={logo} alt=''/>

            <div className='btn-nav'>
              
                <button id='login' onClick={() => {
                      setModalOpen(true);
                 }} >LOGIN</button> or 


                <button id='login'>REGISTER </button> 
                <button id='num'><FontAwesomeIcon icon={faPhone} /> 0800 887 637</button> 
                <button id='num'><FontAwesomeIcon icon={faLocation} /> Find us</button> 
                <button id='sym'> 中文</button>

                {modalOpen && <LoginModal setOpenModal={setModalOpen} />}
            </div>    
        
        </div> 

       
    
    
    </div>
  )
}

export default TopNav