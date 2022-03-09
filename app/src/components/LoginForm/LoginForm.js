import React, {useState} from 'react'

import slogo from './slogo.png'
function LoginForm({Login, error}) {

    const [details, setDetails] = useState({name:'', email:'', password:''})
  
    const submitHandler = e => {
        e.preventDefault();

        Login(details)
    }
    
    return (
    <form onSubmit={submitHandler}>
        <div className='inner-form'>
            <h5>MY TURNERS CAR</h5>
            <h2>CLIENT ACCOUNT</h2>

            <div className='card-content'>
                <img src={slogo} alt=''/>
                <p>For the best mobile experience download the <p id='app'>Turners Mobile App</p></p> 
            </div> 

            {(error !== '') ? ( <div className='error'>{error}</div>) : '' }
            {/* <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div> */}
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type='text' name='name' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type='text' name='name' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>

            <input type='submit' value='LOGIN' />
        
        </div>
    </form>
    
  )
}

export default LoginForm