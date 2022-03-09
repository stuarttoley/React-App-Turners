import React from 'react'
import ClaimHeader from './Claim-Header/ClaimHeader'
import ClaimNav from './Claim-Nav/ClaimNav'
import Footer from './Footer/Footer'
import Policy from './Policy/Policy'

function ClaimPage() {
  return (
    <div>

        <ClaimHeader />
        <ClaimNav />
        <Policy />
        <Footer />
    </div>
  )
}

export default ClaimPage