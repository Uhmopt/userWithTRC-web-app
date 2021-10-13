import MailIcon from '@mui/icons-material/Mail'
import { Button, Grid } from '@mui/material'
import CustomInput from 'components/CustomInput'
import CustomSvgs from 'components/CustomSvgs'
import MainTitle from 'components/MainTitle'
import Layout from 'layouts'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  const [currentState, setCurrentState] = useState({
    email: '',
    verifyCode: '',
    vCode: '',
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
      <MainTitle title="Forgot Password" isLine={true} />
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
      <div className="pt-8">
        <Link to="reset-password">
          <Button variant="contained" size="large" type="submit" fullWidth>
            Submit
          </Button>
        </Link>
      </div>
    </Layout>
  )
}
