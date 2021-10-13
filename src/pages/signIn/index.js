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
          label="Password"
          type="password"
          placeholder="Please enter your password"
          startIcon={<LockIcon className="text-main" />}
          value={currentState.password}
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
      <div className="pt-8 text-main flex justify-between items-center" >
        <div className="cursor-pointer flex items-center"
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
          <div>Remember me</div>
        </div>
        <Link to={`forgot-password`} className="text-green-500">
          Forgot password
        </Link>
      </div>
      <div className="pt-8">
        <Link to={`home`}>
          <Button type="button" variant="contained" size="large" fullWidth>
            Login
          </Button>
        </Link>
      </div>
      <div className="pt-8 text-main text-center m-auto">
        <label className="text-title">Don't you have a account?</label>
        <Link to={`register`}>Register now</Link>
      </div>
    </Layout>
  )
}
