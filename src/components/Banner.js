import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import { Info } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Banner({
  icon = '',
  id = '',
  mail = '',
  joinTime = '',
}) {
  return (
    <div>
      <Link to="sign-in">
        <IconButton className="float-right p-3">
          <LogoutIcon fontSize="large" className="text-white" />
        </IconButton>
      </Link>
      <div className="bg-cover bg-center bg-home h-52 pt-8 w-full text-white">
        <div className="text-center">
          {icon}
          <div className="flex justify-center">
            <label className="self-center pr-2">ID : {id}</label>
            <div className="bg-white text-main px-1 rounded-full text-sm self-center shadow-lg">
              <Link to="update-user"> <Info /> Update Info</Link>
            </div>
          </div>
          <div>
            Mail: <label>{mail}</label>
          </div>
          <div>
            Join time: <label>{joinTime}</label>
          </div>
        </div>
      </div>
    </div>
  )
}
