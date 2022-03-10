
import './App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ClaimPage from './components/ClaimPage';
import HowToPage from './components/HowToPage';
import LoginTest from './components/LoginForm/LoginTest'


function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path='/' element={<HomePage />}/>
         <Route path='http://turners-react.s3-website-ap-southeast-2.amazonaws.com/login' element={<LoginPage />}/>
         <Route path='/claim' element={<ClaimPage />}/>
         <Route path='/howto' element={<HowToPage />}/>
         <Route path='/practise' element={<LoginTest />}/>

       </Routes>
     </Router>
    </div>
  );
}

export default App;
