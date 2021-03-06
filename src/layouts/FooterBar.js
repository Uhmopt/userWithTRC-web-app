import CustomSvgs from 'components/CustomSvgs'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function FooterBar({ menuIndex = 2 }) {
  const { t } = useTranslation()
  const menuItems = [
    { label: t('home'), icon: <CustomSvgs className="icon" />, link: 'home' },
    {
      label:  t('revenue'),
      icon: <CustomSvgs name="Revenue" className="icon m-auto" />,
      link: 'revenue',
    },
    { label: ' ', icon: ' ' },
    {
      label:  t('inviteFriend'),
      icon: <CustomSvgs name="Invite" className="icon m-auto" />,
      link: 'invite',
    },
    {
      label:  t('contact'),
      icon: <CustomSvgs name="Contact" className="icon m-auto" />,
      link: 'contact-us',
    },
  ]
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0)

  useEffect(() => {
    setSelectedMenuIndex(menuIndex)
  }, [menuIndex])

  const handleClickMenu = (e, index) => setSelectedMenuIndex(index)

  const handleClickUpgrade = () => {
    setSelectedMenuIndex(-1)
  }

  return (
    <div className="footer-bar">
      <div className="both left"></div>
      <nav className="m-auto" style={{ '--k': selectedMenuIndex }}>
        {menuItems.map((item, itemIndex) => (
          <Link
            to={item?.link ?? "#"}
            key={itemIndex}
            className={`nav-item ${
              selectedMenuIndex === itemIndex ? 'active' : ''
            } `}
            onClick={(e) => handleClickMenu(e, itemIndex)}
            style={{ '--i': itemIndex }}
          >
            {item?.icon ?? ''}
            <div className="label ">{item?.label ?? ''}</div>
          </Link>
        ))}
      </nav>
      <div className="both right"></div>
      <Link
        to="upgrade"
        className="middle-button-container"
        onClick={() => {
          handleClickUpgrade()
        }}
      >
        <CustomSvgs name="UpgradeUser" className="w-10" />
      </Link>
    </div>
  )
}
