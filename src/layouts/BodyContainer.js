import React from 'react'

export default function BodyContainer({ children = <></> }) {
  return (
    <div id="page_container" className="min-h-screen py-6">
      {children}
    </div>
  )
}
