import { InputAdornment, TextField } from '@mui/material'
import validate from 'lib/validate'
import React, { useState } from 'react'

export default function CustomInput({
  startIcon = '',
  placeholder = '',
  label = '',
  name = '',
  value = '',
  isPassword = false,
  isEmail = false,
  onChange = () => {},
  type = 'text',
}) {
  const [isValid, setIsValid] = useState(true)
  const handleChange = (e) => {
    if (type === 'email') {
      setIsValid( validate( e.target.value ) );
    }
    if (typeof onChange === 'function') {
      onChange(e)
    }
  }
  return (
    <div className="w-full">
      <label className="text-base text-main">{label}</label>
      <TextField
        error
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          disableUnderline: true,
          fullWidth: true,
          className: 'm-2',
        }}
        value={value ?? ''}
        name={name ?? ''}
        // type={isPassword ? 'password' : isEmail ? 'emal' : 'text'}
        type={type || 'text'}
        placeholder={placeholder}
        onChange={handleChange}
        className={`bg-light rounded-md border border-transparent`}
        variant="standard"
        fullWidth
      />
      {(type === 'email') && !isValid ? (
        <label className="text-base text-red-400">
          Please enter the valid email address
        </label>
      ) : null}
    </div>
  )
}
