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
          pName="email"
          pLabel="Email"
          pComment="Please enter your email"
          pIcon={<MailIcon className="text-main" />}
          pValue={currentState.email}
          inputChange={handleChange}
        />
      </div>
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
      <Grid container className="pt-8 w-full">
        <Grid item xs={7}>
          <CustomInput
          pLabel="Verification Code"
          pName="verifyCode"
          pComment="Please enter the code"
          pValue={currentState.verifyCode}
          inputChange={handleChange}
          />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={4} className="pt-6">
          <CustomInput
          pName="vCode"
          pValue={currentState.vCode}
          inputChange={handleChange}
          />
        </Grid>
      </Grid>
      <div className="pt-8 w-full">
        <CustomInput
          pLabel="Invites"
          pName="invites"
          pComment="Optional"
          pValue={currentState.invites}
          inputChange={handleChange}
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
