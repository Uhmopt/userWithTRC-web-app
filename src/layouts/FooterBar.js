import CustomSvgs from 'components/CustomSvgs'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
  { label: 'Home', icon: <CustomSvgs className="icon" label="Home" /> },
  { label: 'Revenue', icon: '🔍' },
  { label: '', icon: '' },
  { label: 'Invite firiend', icon: '🔔' },
  { label: 'Contact', icon: '👱' },
]

export default function FooterBar() {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0)

  const handleClickMenu = (e, index) => setSelectedMenuIndex(index)

  return (
    <div className="footer-bar">
      <div className="both left"></div>
      <nav style={{ '--k': selectedMenuIndex }}>
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
            <div className="label">{item?.label ?? ''}</div>
          </Link>
        ))}
      </nav>
      <div className="both right"></div>

      <div className="middle-button-container">
        <CustomSvgs name="UpgradeUser" />
      </div>
    </div>
  )
}
