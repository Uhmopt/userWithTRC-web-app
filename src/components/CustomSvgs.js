import Home from 'assets/images/svgs/Home.svg'
import UpgradeUser from 'assets/images/svgs/UpgradeUser.svg'
import React from 'react'

const svgs = {
  UpgradeUser,
  Home,
}

export default function CustomSvgs({ name = '', alt = '', ...props }) {
  return (
    <div>
      <img {...props} src={svgs[name] ?? Home} alt={name ?? ''} />
    </div>
  )
}
