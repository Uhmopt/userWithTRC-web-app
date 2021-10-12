import React from 'react'

export default function BodyContainer({ isLogin = false, children = <></> }) {
  return isLogin ? (
    <div id="page_container" className="min-h-screen p-8">
      {children}
    </div>
  ) : (
    <div id="page_container" className="bg-white min-h-screen p-8">
      {children}
    </div>
  )
}
