import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react';

export default function CustomAutocomplete({label = "", userList = [], value = 0, onChange=()=>{} }) {
  const [ option, setOption ] = useState('')
  useEffect(() => {
    const tmpUser =  userList.find((cur)=>Number(cur?.user_id) === Number(value)) ?? '';
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
        isOptionEqualToValue={(option, value) => option.id === value.id}
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
