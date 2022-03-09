import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm'

import './LoginTest.css'
function LoginTest() {

    const adminUser = {
        email:'admin@gmail.com',
        password: 'admin123'
    }

    const [ user, setUser] = useState ({name:'', email: ''});
    const [ error, setError] = useState('');

    const Login = details => {
        console.log(details);

        if (details.email === adminUser.email && details.password === adminUser.password) {

            console.log('logged in');

            setUser({
              name: 'Admin',
              email: details.email
          });

        } else {
            console.log('Sorry uce wrong credentials')
            setError('Sorry uce wrong credentials')
        }
         
    }  

    const Logout = () => {
        console.log('Logout')

        setUser({name:'', email: ''})

        
    }

  return (
    <div className="chap">
        {(user.email !== '') ? (
            <div className='welcome'>
                <h2>Welcome, <span>{user.name}</span></h2>
                <Link className='link' to='/howto'>
                <button onClick={Logout}>Continue</button>
                </Link>
            </div>
        ) : (
            <LoginForm Login={Login} error={error} />
        )}
    </div>
  )
}

export default LoginTest