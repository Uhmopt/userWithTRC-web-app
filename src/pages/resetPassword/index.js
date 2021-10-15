import LockIcon from '@mui/icons-material/Lock'
import { Button, Grid } from '@mui/material'
import CustomInput from 'components/CustomInput'
import Logo from 'components/Logo'
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
    setCurrentState((prvState) => ({
      ...prvState,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <Layout>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <Logo variant="icon" className="text-main m-auto" />
        </Grid>
        <Grid item xs={12}>
          <MainTitle title="Reset Password" isLine={true} />
        </Grid>
        <Grid item xs={12}>
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
          <Link to="sign-in">
            <Button variant="contained" size="large" type="submit" fullWidth>
              Submit
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Layout>
  )
}
