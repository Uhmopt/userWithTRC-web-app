import React, { useState } from 'react'
import Layout from 'layouts'
import CustomSvgs from 'components/CustomSvgs'
import CustomInput from 'components/CustomInput'
import MainTitle from 'components/MainTitle'
import MailIcon from '@mui/icons-material/Mail'
import LockIcon from '@mui/icons-material/Lock'
import { Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Register() {
  const [currentState, setCurrentState] = useState({
    email: '',
    password: '',
    rePassword: '',
    verifyCode: '',
    vCode: '',
    invites: ''
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
      <MainTitle title="Register" isLine={true} isSelectLang={true} />
      <div className="pt-8 w-full">
        <CustomInput
          isEmail={true}
          name="email"
          type="email"
          label="Email"
          placeholder="Please enter your email"
          startIcon={<MailIcon className="text-main" />}
          value={currentState.email}
          onChange={handleChange}
        />
      </div>
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
      <Grid container className="pt-8 w-full">
        <Grid item xs={7}>
          <CustomInput
          label="Verification Code"
          name="verifyCode"
          placeholder="Please enter the code"
          value={currentState.verifyCode}
          onChange={handleChange}
          />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={4} className="pt-6">
          <CustomInput
          name="vCode"
          value={currentState.vCode}
          onChange={handleChange}
          />
        </Grid>
      </Grid>
      <div className="pt-8 w-full">
        <CustomInput
          label="Invites"
          name="invites"
          placeholder="Optional"
          value={currentState.invites}
          onChange={handleChange}
        />
      </div>
      <div className="pt-8">
        <Button variant="contained" size="large" type="submit" fullWidth>
          Sign Up
        </Button>
      </div>

      <div className="pt-8 text-main text-center m-auto">
        <label className="text-title">Do you have a account?</label>
        <Link to={`sign-in`}>Sign in now</Link>
      </div>
    </Layout>
  )
}
