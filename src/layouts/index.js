import React from 'react'
import AdminHeader from './AdminHeader'
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
  isPadding = true,
  banner = '',
  children = <></>,
  menuIndex = 0,
  maxWidth = 'sm',
  admin = false
}) {
  return (
    <div id="out_body" className="bg-gradient-to-b from-blue-50 to-green-50">
      {!banner ? (
        <>
        {admin?<AdminHeader />:
        <Header
          onBack={onBack}
          onSignOut={onSignOut}
          title={title}
          before={before}
          isLogin={Boolean(isLogin)}
          maxWidth={ maxWidth }
        />
        }
        
        </>
      ) : null}
      <CustomContainer maxWidth = { maxWidth }>
        <div className="min-h-screen">
          {banner}
          <BodyContainer isLogin={isLogin} isPadding={isPadding}>{children}</BodyContainer>
        </div>
      </CustomContainer>
      {!admin&&<Footer isLogin={Boolean(isLogin)} menuIndex = {menuIndex} />}
    </div>
  )
}
