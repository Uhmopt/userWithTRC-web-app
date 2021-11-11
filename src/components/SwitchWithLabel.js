import { Switch } from '@mui/material'
import React from 'react'

export default function SwitchWithLabel({
  label = '',
  name = 'switch',
  value = false,
  onClick = () => {},
  className = "w-40"
}) {
  return (
    <div className={`${className} flex items-center justify-between`}>
      <label>{label}</label>
      <Switch
        checked={value}
        name={name}
        onClick={
          typeof onClick === 'function' ? onClick : console.log('Error!')
        }
      />
    </div>
  )
}
