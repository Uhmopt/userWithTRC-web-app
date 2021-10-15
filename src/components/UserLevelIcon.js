import UserLevel from 'assets/images/svgs/Star.svg'
import React from 'react'

export default function UserLevelIcon({ levelNum = 0, alt='', iconClass='', ...props }) {
  return (
    <div className="relative text-center">
      <img
        {...props}
        src={UserLevel}
        alt={alt || ''}
      />
      <span className={iconClass} >{levelNum}</span>
    </div>
  )
}
