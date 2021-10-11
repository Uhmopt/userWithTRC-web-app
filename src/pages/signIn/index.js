import React, { useState } from 'react'
import Layout from 'layouts'
import CustomSvgs from 'components/CustomSvgs'
import CustomInput from 'components/CustomInput'
import MainTitle from 'components/MainTitle'
import MailIcon from '@mui/icons-material/Mail'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import LockIcon from '@mui/icons-material/Lock'
import { Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

export default function SignIn() {
  const [currentState, setCurrentState] = useState({
    email: '',
    password: '',
    verifyCode: '',
    vCode: '',
    isRemember: false,
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
      <MainTitle title="Sign In" isLine={true} isSelectLang={true} />
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
      <div className="pt-8 text-main flex justify-between" >
        <div className="hover:cursor-pointer"
          onClick={() => {
            setCurrentState({
              ...currentState,
              isRemember: !Boolean(currentState.isRemember),
            })
          }}
        >
          {Boolean(currentState.isRemember) ? (
            <CheckBoxIcon />
          ) : (
            <CheckBoxOutlineBlankIcon />
          )}
          <label id="remember-me">Remember me</label>
        </div>
        <Link to={`forgot-password`} className="text-green-500">
          {' '}
          Forgot password
        </Link>
      </div>
      <div className="pt-8">
        <Button variant="contained" size="large" type="submit" fullWidth>
          Login
        </Button>
      </div>
      <div className="pt-8 text-main text-center m-auto">
        <label className="text-title">Don't you have a account?</label>
        <Link to={`register`}>Register now</Link>
      </div>
    </Layout>
  )
}
