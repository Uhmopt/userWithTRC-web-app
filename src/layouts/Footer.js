import React from 'react'
import CustomContainer from './CustomContainer'
import FooterBar from './FooterBar'

export default function Footer({ isLogin = false }) {
  return isLogin ? (
    <div className="fixed bottom-0 z-30 w-full">
      <CustomContainer>
        <FooterBar />
      </CustomContainer>
    </div>
  ) : (
    ''
  )
}
