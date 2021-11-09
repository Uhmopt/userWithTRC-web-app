import React from 'react'
import { Container } from '@mui/material'

export default function CustomContainer({ children = '', maxWidth = 'sm' }) {
  return (
    <Container style={{ padding: 0 }} maxWidth={ maxWidth } className="shadow-lg">
      {children}
    </Container>
  )
}
