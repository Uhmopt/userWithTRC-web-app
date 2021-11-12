import {
  AdminPanelSettingsOutlined,
  Logout,
  PeopleAltOutlined,
  SettingsOutlined
} from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import CustomSvgs from 'components/CustomSvgs'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { logout } from 'store/actions/auth'
import CustomContainer from './CustomContainer'

export default function AdminHeader({ maxWidth = 'xl' }) {
  const history = useHistory()
  const dispatch = useDispatch()
  const onSignOut = () => {
    dispatch(logout())
    history.push('/sign-in')
  }
  return (
    <div className="fixed top-0 z-30 w-full">
      <CustomContainer maxWidth={maxWidth}>
        <div className="p-2 flex justify-end items-center bg-blue-500 shadow-default">
          <Link to="users">
            <Tooltip title="User management" arrow>
              <IconButton color="default">
                <PeopleAltOutlined fontSize="large" className="text-white" />
              </IconButton>
            </Tooltip>
          </Link>
          <Link to="settings">
            <Tooltip title="Settings" arrow>
              <IconButton color="default">
                <SettingsOutlined fontSize="large" className="text-white" />
              </IconButton>
            </Tooltip>
          </Link>
          <Link to="user-upgrade">
            <Tooltip title="User Upgrade" arrow>
              <IconButton color="default">
                <CustomSvgs name="UpgradeUser" className="w-7" />
              </IconButton>
            </Tooltip>
          </Link>
          <Link to="sign-in">
            <Tooltip title="Logout" arrow>
              <IconButton onClick={onSignOut} color="default">
                <Logout fontSize="large" className="text-white" />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
      </CustomContainer>
    </div>
  )
}
