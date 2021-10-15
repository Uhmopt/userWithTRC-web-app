import React from 'react'
import Layout from '../../layouts'
import MainTitle from 'components/MainTitle'
import CustomInput from 'components/CustomInput'
import MailIcon from '@mui/icons-material/Mail'
import LockIcon from '@mui/icons-material/Lock'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import { Button, Grid } from '@mui/material'
import { useState } from 'react'

export default function UpdateUser() {
  const [currentState, setCurrentState] = useState({
    email: '',
    usdt: '',

    password: '',
    rePassword: '',
    verifyCode: '',
    vCode: '',
    emailCode:'',
    eCode: '',

  })
  const handleChange = (e) => {
    setCurrentState({
      ...currentState,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <Layout
      isLogin={true}
      title="Update Information"
      before="home"
      menuIndex={2}
    >
      <MainTitle
        title={<label className="text-xl text-title">Revise resume</label>}
        isLogin={true}
        className="pb-6"
      />
      <Box className="bg-white rounded-md shadow-md p-8 pb-24 mb-32">
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
            label="ID"
            name="id"
            value={currentState.id}
            onChange={handleChange}
          />
        </div>
        <div className="pt-8 w-full">
          <CustomInput
            label="USDT_TRC20"
            name="usdt"
            value={currentState.usdt}
            onChange={handleChange}
          />
        </div>
        <div className="text-xs text-title pt-4">
          Tip: Please use your personal wallet, other wise it cannot be upgraded
          automatically
        </div>
        <MainTitle />
        <div className="pt-8 w-full">
          <CustomInput
            isPassword={true}
            name="password"
            type="password"
            label="Change Password"
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

        <Grid container className="pt-8">
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
              placeholder="8245"
              value={currentState?.vCode ?? ''}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Grid container className="pt-8 w-full">
          <Grid item xs={7}>
            <CustomInput
              label="Email Code"
              name="emailCode"
              placeholder="Please enter the code"
              value={currentState.emailCode}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4} className="pt-6">
            <CustomInput
              name="eCode"
              placeholder="Get code"
              value={currentState.eCode}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <div className="pt-8">
          <Link to={`#`}>
            <Button type="button" variant="contained" size="large" fullWidth>
              Submit
            </Button>
          </Link>
        </div>
      </Box>
    </Layout>
  )
}
