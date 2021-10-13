import LockIcon from '@mui/icons-material/Lock'
import { Button } from '@mui/material'
import CustomInput from 'components/CustomInput'
import CustomSvgs from 'components/CustomSvgs'
import MainTitle from 'components/MainTitle'
import Layout from 'layouts'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
          name="password"
          type="password"
          label="Password"
          placeholder="Please enter your password"
          startIcon={<LockIcon className="text-main" />}
          value={currentState.password}
          onChange={handleChange}
        />
      </div>
      <div className="pt-8 w-full">
        <CustomInput
          isPassword={true}
          name="rePassword"
          type="password"
          label="Confirm Password"
          placeholder="Please confirm password"
          startIcon={<LockIcon className="text-main" />}
          value={currentState.rePassword}
          onChange={handleChange}
        />
      </div>
      <div className="pt-8">
        <Link to="sign-in">
          <Button variant="contained" size="large" type="submit" fullWidth>
            Submit
          </Button>
        </Link>
      </div>
    </Layout>
  )
}
