import { ArrowBack, Logout } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Logo from 'components/Logo'
import LevelIcon from 'components/LevelIcon'
import React from 'react'
import CustomContainer from './CustomContainer'
import { Link } from 'react-router-dom'

export default function Header({
  onBack = () => {},
  onSignOut = () => {},
  isLogin = false,
  title = 'First level user',
  before = '#',
}) {
  return isLogin ? (
    <div className="fixed top-0 z-30 w-full">
      <CustomContainer>
        <div className="p-2 flex justify-between items-center bg-blue-500 shadow-default">
          <div>
            <Link to={before}>
              <IconButton onClick={onBack} color="default">
                <ArrowBack fontSize="large" className="text-white" />
              </IconButton>
            </Link>
          </div>
          <div>
            <Logo variant="title" title={title} />
          </div>
          <div>
            {Boolean(isLogin) ? (
              <Link to="sign-in">
                <IconButton onClick={onSignOut} color="default">
                  <Logout fontSize="large" className="text-white" />
                </IconButton>
              </Link>
            ) : (
              <LevelIcon />
            )}
          </div>
        </div>
      </CustomContainer>
    </div>
  ) : (
    ''
  )
}
