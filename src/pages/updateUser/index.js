import LockIcon from '@mui/icons-material/Lock'
import MailIcon from '@mui/icons-material/Mail'
import { Button, Grid } from '@mui/material'
import CustomInput from 'components/CustomInput'
import MainTitle from 'components/MainTitle'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../layouts'

export default function UpdateUser() {
  const [currentState, setCurrentState] = useState({
    email: '',
    usdt: '',
    password: '',
    rePassword: '',
    verifyCode: '',
    vCode: '',
    emailCode: '',
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
        className="pb-12"
      />
      <Grid
        container
        rowSpacing={3}
        className="bg-white rounded-md shadow-md p-8 pb-24 mb-32"
      >
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
          <CustomInput
            label="ID"
            name="id"
            value={currentState.id}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInput
            label="USDT_TRC20"
            name="usdt"
            value={currentState.usdt}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} className="text-xs text-title pt-4">
          Tip: Please use your personal wallet, other wise it cannot be upgraded
          automatically
        </Grid>
        <MainTitle />
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={3}>
            <Grid item xs={8}>
              <CustomInput
                label="Verification Code"
                name="verifyCode"
                placeholder="Please enter the code"
                value={currentState.verifyCode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4} className="pt-6">
              <CustomInput
                name="vCode"
                placeholder="8245"
                value={currentState?.vCode ?? ''}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={3}>
            <Grid item xs={8}>
              <CustomInput
                label="Email Code"
                name="emailCode"
                placeholder="Please enter the code"
                value={currentState.emailCode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4} className="pt-6">
              <CustomInput
                name="eCode"
                placeholder="Get code"
                value={currentState.eCode}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Link to={`#`}>
            <Button type="button" variant="contained" size="large" fullWidth>
              Submit
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Layout>
  )
}
