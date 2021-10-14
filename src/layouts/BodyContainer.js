import React from 'react'

export default function BodyContainer({
  isLogin = false,
  isPadding = true,
  children = <></>,
}) {
  const paddingClass = isPadding ? 'pt-24' : ''
  return isLogin ? (
    <div id="page_container" className={`bg-light min-h-screen p-8 shadow-lg ${paddingClass}`}>
      {children}
    </div>
  ) : (
    <div id="page_container" className="bg-white min-h-screen px-8 pt-16 shadow-lg">
      {children}
    </div>
  )
}
