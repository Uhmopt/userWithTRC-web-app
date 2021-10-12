import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { Info } from '@mui/icons-material'
import { IconButton } from '@mui/material';

export default function Banner({
  icon = '',
  id = '',
  mail = '',
  joinTime = '',
}) {
  return (
    <div>
      <IconButton className="float-right p-3"><LogoutIcon className="text-white w-10 h-10"/></IconButton>
      <div className="bg-cover bg-center bg-home h-52 pt-8 w-full text-white">
        <div className="text-center">
          {icon}
          <div className="flex justify-center">
            <label className="self-center pr-2">ID : {id}</label>
            <div className="bg-white text-main px-1 rounded-full text-sm self-center">
              <Info /> Update Info
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
