import React from 'react'

export default function BodyContainer({ children = <></> }) {
  return (
    <div id="page_container" className="bg-white min-h-screen p-8">
      {children}
    </div>
  )
}
