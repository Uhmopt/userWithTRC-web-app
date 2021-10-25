/* eslint-disable react-hooks/exhaustive-deps */
import LockIcon from '@mui/icons-material/Lock'
import MailIcon from '@mui/icons-material/Mail'
import { Button, Grid } from '@mui/material'
import CustomInput from 'components/CustomInput'
import MainTitle from 'components/MainTitle'
import React, { useState, useEffect } from 'react'
import Layout from '../../layouts'
import checkValidEmail from 'lib/checkValidEmail'
import { useSelector } from 'react-redux'

const defaultUpdateInfo = {
  email: '',
  rid: '',
  address: '',
  password: '',
  rePassword: '',
  emailCode: '',
  eCode: '',
}

export default function UpdateUser() {
  const [currentState, setCurrentState] = useState(defaultUpdateInfo)
  const user = useSelector((state) => state?.auth?.user ?? {})

  useEffect(() => {
    setCurrentState((prevState = defaultUpdateInfo) => ({
      ...(prevState ?? defaultUpdateInfo),
      email: user?.user_email ?? '',
      rid: user?.user_rid ?? '',
      address: user?.user_wallet_address ?? '',
    }))
  }, [])

  const handleChange = (e) => {
    setCurrentState((prevState = defaultUpdateInfo) => ({
      ...(prevState ?? defaultUpdateInfo),
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      0 < (currentState?.password ?? '').length < 8 &&
      currentState?.password !== currentState?.rePassword
    ) {
      return false;
    }
    
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
      <form onSubmit={handleSubmit}>
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
              value={currentState?.email ?? ''}
              onChange={handleChange}
              errorText="Email type is not matched"
              errorState={
                !Boolean(currentState?.email)
                  ? false
                  : !checkValidEmail(currentState?.email ?? '')
              }
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              label="ID"
              name="rid"
              value={currentState.rid}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              label="USDT_TRC20"
              name="address"
              value={currentState.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} className="text-xs text-title pt-4">
            Tip: Please use your personal wallet, other wise it cannot be
            upgraded automatically
          </Grid>
          <MainTitle />
          <Grid item xs={12}>
            <CustomInput
              isPassword={true}
              name="password"
              label="Password"
              type="password"
              placeholder="Please enter your password"
              startIcon={<LockIcon className="text-main" />}
              value={currentState?.password ?? ''}
              onChange={handleChange}
              errorText="Password should be over 8 letters"
              errorState={
                !Boolean(currentState?.password)
                  ? false
                  : (currentState?.password ?? '').length < 8
              }
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              name="rePassword"
              type="password"
              label="Confirm Password"
              placeholder="Please confirm password"
              startIcon={<LockIcon className="text-main" />}
              value={currentState.rePassword}
              onChange={handleChange}
              errorText="Password is not matched"
              errorState={currentState?.password !== currentState.rePassword}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" size="large" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Layout>
  )
}
