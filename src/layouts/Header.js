import { ArrowBack, Logout } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Logo from 'components/Logo'
import UserAvatar from 'components/UserAvatar'
import React from 'react'
import CustomContainer from './CustomContainer'

export default function Header({
  onBack = () => {},
  onSignOut = () => {},
  isHome = false,
}) {
  if (isHome) {
    return (
      <div className="fixed top-0 z-30 w-full">
        <CustomContainer>
          <div className="p-2 flex justify-between items-center bg-blue-500 shadow-default">
            <div>
              <IconButton onClick={onBack} color="default">
                <ArrowBack className="text-white" />
              </IconButton>
            </div>
            <div>
              <Logo variant="text" />
            </div>
            <div>
              {Boolean(isHome) ? (
                <IconButton onClick={onSignOut} color="default">
                  <Logout className="text-white" />
                </IconButton>
              ) : (
                <UserAvatar />
              )}
            </div>
          </div>
        </CustomContainer>
      </div>
    )
  } else {
    return null
  }
}
