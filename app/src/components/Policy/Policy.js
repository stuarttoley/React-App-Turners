import React from 'react'

import './Policy.css'

import { Link } from 'react-router-dom'

function Policy() {
  return (
    <div className='policy-container'>
        
       <div className='table-container'>
       <table>
            <tr>
                <th>Policy Number</th>
                <th>Type of Insurance</th>
                <th>Insured Car</th>
                <th>Who's insured</th>
                <th>Type of Incident</th>
                <th>Date of incident</th>
                <th>File Number</th>
            </tr>
            <tr>
                <td>1011234567</td>
                <td>Comprehensive</td>
                <td>Mitsubishi Lancer</td>
                <td>Ronaldo Paugia</td>
                <td>
                  <select name="cars" id="cars">
                    <option value="stolen">Stolen</option>
                    <option value="accident">Auto Accident</option>
                    <option value="fire">Fire</option>
                    <option value="struck">Struck by an Object</option>
                    <option value="struck">Water and Freezing Damage</option>
                    <option value="struck">Wind and Hail Damage</option>
                    <option value="struck">Theft and Burglary</option>
                  </select>
                </td>
                <td><input type='text' /></td>
                <td><input type='text' /></td>
            </tr>
           
        </table> 

        <div>
          
        <Link to='/'>
        <button className='claim-btn'>Claim Now</button>  
        </Link>
        </div>
        
        </div>
        
    </div>
  )
}

export default Policy