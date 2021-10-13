import React from 'react'
import BodyContainer from './BodyContainer'
import CustomContainer from './CustomContainer'
import Footer from './Footer'
import Header from './Header'

export default function Layout({
  onBack = () => {},
  onSignOut = () => {},
  title = "",
  before="#",
  isLogin = false,
  banner = '',
  children = <></>,
  menuIndex = 0
}) {
  return (
    <div id="out_body" className="bg-gradient-to-b from-blue-50 to-green-50">
      {!banner ? (
        <Header
          onBack={onBack}
          onSignOut={onSignOut}
          title={title}
          before={before}
          isLogin={Boolean(isLogin)}
        />
      ) : null}
      <CustomContainer>
        <div className="min-h-screen">
          {banner}
          <BodyContainer isLogin={isLogin}>{children}</BodyContainer>
        </div>
      </CustomContainer>
      <Footer isLogin={Boolean(isLogin)} menuIndex = {menuIndex} />
    </div>
  )
}
