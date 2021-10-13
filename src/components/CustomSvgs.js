import Logo from 'assets/images/svgs/Logo.svg'
import Logo1 from 'assets/images/svgs/Logo1.svg'
import Home from 'assets/images/svgs/Home.svg'
import Invite from 'assets/images/svgs/Invite.svg'
import Revenue from 'assets/images/svgs/Revenue.svg'
import Contact from 'assets/images/svgs/Contact.svg'
import Level1 from 'assets/images/svgs/Level1.svg'
import Star from 'assets/images/svgs/Star.svg'
import UpgradeUser from 'assets/images/svgs/UpgradeUser.svg'
import React from 'react'

const svgs = {
  UpgradeUser,
  Home,
  Logo,
  Logo1,
  Revenue,
  Invite,
  Contact,
  Level1,
  Star
}

export default function CustomSvgs({ name = '', alt = '', ...props }) {
  return (
    <div>
      <img {...props} src={svgs[name] ?? Home} alt={name ?? ''} />
    </div>
  )
}
