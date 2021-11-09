import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react';

export default function CustomAutocomplete({label = "", userList = [], value = 0, onChange=()=>{} }) {
  console.log( label, userList, value )
  const [ option, setOption ] = useState('')
  useEffect(() => {
    const tmpUser =  userList.find((cur)=>Number(cur?.user_id) === Number(value)) ?? '';
    console.log( tmpUser )
    setOption( tmpUser );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <div>
      <Autocomplete
        clearOnEscape
        value={option}
        options={userList}
        onChange={onChange}
        style={{ width: 160 }}
        renderInput={(params) => (
          <TextField
            required
            {...params}
            label={label}
            variant="standard"
          />
        )}
      />
    </div>
  )
}
