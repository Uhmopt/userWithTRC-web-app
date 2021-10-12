import CustomSvgs from 'components/CustomSvgs'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
  { label: 'Home', icon: <CustomSvgs className="icon" /> },
  { label: 'Revenue', icon: <CustomSvgs name="Revenue" className="icon m-auto" /> },
  { label: ' ', icon: ' ' },
  { label: 'Invite friend', icon: <CustomSvgs name="Invite" className="icon m-auto" /> },
  { label: 'Contact', icon: <CustomSvgs name="Contact" className="icon m-auto" /> },
]

export default function FooterBar() {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0)

  const handleClickMenu = (e, index) => setSelectedMenuIndex(index)

  const handleClickUpgrade = () => {
    setSelectedMenuIndex(-1);
  }

  return (
    <div className="footer-bar">
      <div className="both left"></div>
      <nav className="m-auto" style={{ '--k': selectedMenuIndex }}>
        {menuItems.map((item, itemIndex) => (
          <Link
            key={itemIndex}
            className={`nav-item ${
              selectedMenuIndex === itemIndex ? 'active' : ''
            } `}
            to="#"
            onClick={(e) => handleClickMenu(e, itemIndex)}
            style={{ '--i': itemIndex }}
          >
            {item?.icon ?? ''}
            <div className="label ">{item?.label ?? ''}</div>
          </Link>
        ))}
      </nav>
      <div className="both right"></div>
      <Link to="#" className="middle-button-container" onClick={()=>{handleClickUpgrade()}}>
        <CustomSvgs name="UpgradeUser" />
      </Link>
    </div>
  )
}
