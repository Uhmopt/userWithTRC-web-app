import { InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function CustomInput({
  pIcon = '',
  pComment = '',
  pLabel = '',
  pName = '',
  pValue = '',
  isPassword = false,
  isEmail = false,
  inputChange,
}) {
  const [isValid, setIsValid] = useState(true)
  const handleChange = (e) => {
    inputChange(e)
    console.log(e.target.name)
    if (e.target.name === 'email') {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
      )
      if (!pattern.test(e.target.value)) {
        setIsValid(false)
      } else {
        setIsValid(true)
      }
    }
  }
  return (
    <div className="w-full">
      <label className="text-base text-main">{pLabel}</label>
      <TextField
        error
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{pIcon}</InputAdornment>
          ),
          disableUnderline: true,
          fullWidth: true,
          className: 'm-2',
        }}
        value={pValue}
        name={pName}
        type={isPassword ? 'password' : isEmail ? 'emal' : 'text'}
        placeholder={pComment}
        onChange={handleChange}
        className={`bg-light rounded-md focus:ring-2`}
        variant="standard"
        fullWidth
      />
      {isEmail && !isValid ? (
        <label className="text-base text-red-400">
          Please enter the valid email address
        </label>
      ) : null}
    </div>
  )
}
