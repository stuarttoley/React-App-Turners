import React from 'react'

import TopNav from './HomePage/TopNavbar.js/TopNav'
import Navbar from './HomePage/Navbar/Navbar'
import Footer from './Footer/Footer'
import Home from './HomePage/Home/Home'


function HomePage() {
  return (
    <div>
        <TopNav />
        <Navbar />
        <Home />
        <Footer />
    </div>
  )
}

export default HomePage