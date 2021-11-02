import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

export default function CustomInput({
  startIcon = '',
  endIcon = '',
  placeholder = '',
  label = '',
  name = '',
  value = '',
  errorText = '',
  errorState = false,
  onChange = () => {},
  type = 'text',
  required = true,
  disabled = false,
  className = "bg-light"
}) {
  const handleChange = (e) => {
    if (typeof onChange === 'function') {
      onChange(e)
    }
  }
  return (
    <div className="w-full">
      <span className="text-base text-main">{label}</span>
      <TextField
        required={required ?? true}
        // disabled
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
        className={`${className ?? ''} rounded-md border border-transparent`}
        variant="standard"
        fullWidth
        disabled = {disabled}
      />
      {Boolean(errorState ?? false) && (
        <span className="text-base text-red-400">{errorText ?? ''}</span>
      )}
    </div>
  )
}
