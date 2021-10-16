import MailIcon from '@mui/icons-material/Mail'
import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import CustomInput from 'components/CustomInput'
import Logo from 'components/Logo'
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
    setCurrentState((prvState = {}) => ({
      ...(prvState ?? {}),
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
          <MainTitle title="Forgot Password" isLine={true} />
        </Grid>
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
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <CustomInput
                label="Verification Code"
                name="verifyCode"
                placeholder="Please enter the code"
                value={currentState?.verifyCode ?? ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <Box className="pt-6">
                <CustomInput
                  name="vCode"
                  placeholder="8245"
                  value={currentState?.vCode ?? ''}
                  onChange={handleChange}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box className="pt-6">
            <Link to="reset-password">
              <Button variant="contained" size="large" type="submit" fullWidth>
                Submit
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}
