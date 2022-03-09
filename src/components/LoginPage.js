import React from 'react'

import ClaimHeader from './Claim-Header/ClaimHeader'
import ClaimNav from './Claim-Nav/ClaimNav'
import Footer from './Footer/Footer'
import LoginTest from './LoginForm/LoginTest'

function LoginPage() {
  return (
    <div>
        <ClaimHeader />
        <ClaimNav />
        
        <LoginTest />
        <Footer />
    </div>
  )
}

export default LoginPage