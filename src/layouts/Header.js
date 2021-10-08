import { ArrowBack, Logout } from '@mui/icons-material'
import { Container, IconButton } from '@mui/material'
import Logo from 'components/Logo'
import UserAvatar from 'components/UserAvatar'
import React from 'react'

export default function Header({
  onBack = () => {},
  onSignOut = () => {},
  isHome = false,
}) {
  return (
    <div className="fixed top-0 z-30 w-full">
      <Container maxWidth="sm">
        <div className="p-2 flex justify-between items-center bg-blue-500">
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
      </Container>
    </div>
  )
}
