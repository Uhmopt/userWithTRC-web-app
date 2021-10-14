import React from 'react'

export default function BodyContainer({ isLogin = false, isPadding=true, children = <></> }) {
  const paddingClass = isPadding?"py-28":"";
  return isLogin ? (
    <div id="page_container" className={`bg-light min-h-screen shadow-lg px-8 ${paddingClass}`}>
      {children}
    </div>
  ) : (
    <div id="page_container" className="bg-white min-h-screen p-8 shadow-lg py-16">
      {children}
    </div>
  )
}
