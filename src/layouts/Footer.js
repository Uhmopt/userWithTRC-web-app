import React from 'react'
import CustomContainer from './CustomContainer'
import FooterBar from './FooterBar'

export default function Footer({ isHome = false }) {
  if( isHome ){
    return (
      <div className="fixed bottom-0 z-30 w-full">
        <CustomContainer>
          <FooterBar />
        </CustomContainer>
      </div>
    )
  } else {
    return null;
  }
}
