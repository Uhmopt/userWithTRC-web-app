import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
  { name: 'Home', label: '🏠' },
  { name: 'Revenue', label: '🔍' },
  { name: '', label: '' },
  { name: 'Invite firiend', label: '🔔' },
  { name: 'Contact', label: '👱' },
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
            className="nav-item"
            to="#"
            onClick={(e) => handleClickMenu(e, itemIndex)}
            data-ico={item?.label ?? ''}
            style={{ '--i': itemIndex }}
          >
            {item?.name ?? ''}
          </Link>
        ))}
      </nav>
      <div className="both right"></div>

      <div className="middle-button-container">Up</div>
    </div>
  )
}
