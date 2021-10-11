import LockIcon from '@mui/icons-material/Lock'
import { Button } from '@mui/material'
import CustomInput from 'components/CustomInput'
import CustomSvgs from 'components/CustomSvgs'
import MainTitle from 'components/MainTitle'
import Layout from 'layouts'
import React, { useState } from 'react'

export default function ResetPassword() {
  const [currentState, setCurrentState] = useState({
    password: '',
    rePassword: '',
  })
  const handleChange = (e) => {
    setCurrentState({
      ...currentState,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <Layout>
      <CustomSvgs name="Logo" className="icon m-auto pt-12" label="Logo" />
      <MainTitle title="Reset Password" isLine={true} />
      <div className="pt-8 w-full">
        <CustomInput
          isPassword={true}
          pName="password"
          pLabel="Password"
          pComment="Please enter your password"
          pIcon={<LockIcon className="text-main" />}
          pValue={currentState.password}
          inputChange={handleChange}
        />
      </div>
      <div className="pt-8 w-full">
        <CustomInput
          isPassword={true}
          pName="rePassword"
          pLabel="Confirm Password"
          pComment="Please confirm password"
          pIcon={<LockIcon className="text-main" />}
          pValue={currentState.rePassword}
          inputChange={handleChange}
        />
      </div>
      <div className="pt-8">
        <Button variant="contained" size="large" type="submit" fullWidth>
          Submit
        </Button>
      </div>
    </Layout>
  )
}
