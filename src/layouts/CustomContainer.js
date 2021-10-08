import React from 'react'
import { Container } from '@mui/material'

export default function CustomContainer({ children = '' }) {
  return (
    <Container style={{ padding: 0 }} maxWidth="sm">
      {children}
    </Container>
  )
}
