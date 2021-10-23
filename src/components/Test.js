import { TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';

export default function Test() {

  const [values, setValues] = useState({
    name: ""
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const error = values.name.length < 8;
  return (
    <form>
      <TextField
        id="standard-name"
        label="Name"
        value={values.name}
        onChange={handleChange("name")}
        margin="normal"
        helperText={error ? "Password should be over 8 letters" : "Perfect!"}
        error={error}
      />
    </form>
  );
}