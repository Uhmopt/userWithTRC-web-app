import React from 'react'
import BodyContainer from './BodyContainer'
import CustomContainer from './CustomContainer'
import Footer from './Footer'
import Header from './Header'

export default function Layout({
  onBack = () => {},
  onSignOut = () => {},
  isHome = false,
  children = <></>,
}) {
  return (
    <div id="out_body" className="bg-gradient-to-b from-blue-50 to-green-50">
      <Header onBack={onBack} onSignOut={onSignOut} isHome={Boolean(isHome)} />
      <CustomContainer>
        <div className="min-h-screen">
          <BodyContainer>{children}</BodyContainer>
        </div>
      </CustomContainer>
      <Footer />
    </div>
  )
}
