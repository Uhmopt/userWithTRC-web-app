import { InputAdornment, TextField } from '@mui/material'
import validate from 'lib/validate'
import React, { useState } from 'react'

export default function CustomInput({
  startIcon = '',
  endIcon = '',
  placeholder = '',
  label = '',
  name = '',
  value = '',
  onChange = () => {},
  type = 'text',
}) {
  const [isValid, setIsValid] = useState(true)
  const handleChange = (e) => {
    if (type === 'email') {
      setIsValid(validate(e.target.value))
    }
    if (typeof onChange === 'function') {
      onChange(e)
    }
  }
  return (
    <div className="w-full">
      <span className="text-base text-main">{label}</span>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ),
          disableUnderline: true,
          className: 'p-2',
        }}
        value={value ?? ''}
        name={name ?? ''}
        type={type || 'text'}
        placeholder={placeholder}
        onChange={handleChange}
        className={'bg-light rounded-md border border-transparent'}
        variant="standard"
        fullWidth
      />
      {type === 'email' && !isValid ? (
        <span className="text-base text-red-400">
          Please enter the valid email address
        </span>
      ) : null}
    </div>
  )
}
