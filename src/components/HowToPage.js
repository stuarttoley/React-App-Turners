import React from 'react'
import Footer from './Footer/Footer'
import HowTo from './How-to/HowTo'
import ClaimNav from './Claim-Nav/ClaimNav'
import ClaimHeader from './Claim-Header/ClaimHeader'

function HowToPage() {
  return (
    <div>
        <ClaimHeader />
        <ClaimNav />    
        <HowTo />
        <Footer />
    </div>
  )
}

export default HowToPage