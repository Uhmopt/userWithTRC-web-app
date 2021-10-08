import { Container } from '@material-ui/core'
import React from 'react'
import BodyContainer from './BodyContainer'
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
      <Container maxWidth="sm" className="min-h-screen">
        <BodyContainer>{children}</BodyContainer>
      </Container>
      <Footer />
    </div>
  )
}
