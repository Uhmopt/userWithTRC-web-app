import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Container } from '@material-ui/core'

export default function Layout({ children = <></>, fullWidth = false }) {
  return (
    <div>
      <Header />
      {Boolean(fullWidth) ? (
        <div id="page_container">{children}</div>
      ) : (
        <Container>
          <div id="page_container">{children}</div>
        </Container>
      )}
      <Footer />
    </div>
  )
}
