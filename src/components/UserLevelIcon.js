import UserLevel from 'assets/images/svgs/UserLevel.svg'
import React from 'react'

export default function UserLevelIcon({ levelNum = 0, alt='', ...props }) {
  return (
    <div className="relative">
      <img
        {...props}
        src={UserLevel}
        alt={alt || ''}
      />
      <span className="text-xl absolute top-1/3 left-1/2">{levelNum}</span>
    </div>
  )
}
