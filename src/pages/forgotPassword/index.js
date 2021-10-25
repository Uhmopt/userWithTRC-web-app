import MailIcon from '@mui/icons-material/Mail'
import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import CustomInput from 'components/CustomInput'
import Logo from 'components/Logo'
import MainTitle from 'components/MainTitle'
import Layout from 'layouts'
import checkValidEmail from 'lib/checkValidEmail'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { forgotPassword } from 'store/actions/auth'
import { useHistory } from 'react-router'
import notification from 'lib/notification'

export default function ForgotPassword() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [currentState, setCurrentState] = useState({
    email: '',
  })
  const handleChange = (e) => {
    setCurrentState((prvState = {}) => ({
      ...(prvState ?? {}),
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(forgotPassword(currentState.email))
    .then((res) => {
      Boolean(res?.result ?? false)
      if (res?.result ?? false) {
        history.push({pathname: '/verification', state: "reset-password"})
        notification('success', res?.msg ?? 'success')
      } else {
        notification('error', res?.msg ?? 'Something went wrong.')
      }
      Promise.resolve()
    })
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
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
              errorText="Email type is not matched"
              errorState={!Boolean(currentState?.email) ? false : !checkValidEmail(currentState?.email ?? '')}
            />
          </Grid>
          <Grid item xs={12}>
            <Box className="pt-6">
              <Button variant="contained" size="large" type="submit" fullWidth>
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Layout>
  )
}
