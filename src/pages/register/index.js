import LockIcon from '@mui/icons-material/Lock'
import MailIcon from '@mui/icons-material/Mail'
import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import CustomInput from 'components/CustomInput'
import LangSelect from 'components/LangSelect'
import Logo from 'components/Logo'
import MainTitle from 'components/MainTitle'
import Layout from 'layouts'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from 'store/actions/auth'
import notification from 'lib/notification'
import checkValidEmail from 'lib/checkValidEmail'
// import { useHistory } from 'react-router'
// import notification from 'lib/notification'

const defaultUser = {
  email: '',
  password: '',
  rePassword: '',
  verifyCode: '',
  vCode: '',
  invites: '',
}
export default function Register() {
  const [currentState, setCurrentState] = useState(defaultUser)
  const dispatch = useDispatch()
  // const history = useHistory()
  const handleChange = (e) => {
    setCurrentState((prevState = defaultUser) => ({
      ...(prevState ?? defaultUser),
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      (currentState?.password ?? '').length < 8 ||
      currentState?.password !== currentState.rePassword
    ) {
      return false;
    }
    dispatch(register(currentState.email, currentState.password))
      .then((res) => {
        if (res.result) {
          notification('success', res.msg)
          setCurrentState({
            ...defaultUser,
          })
        } else {
          notification('error', res.msg)
        }
      })
      .catch((err) => {
        console.log(err, 'err')
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
            <MainTitle title="Register" isLine={true} />
          </Grid>
          <Box className="w-full text-right -mt-14">
            <LangSelect />
          </Box>
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
              errorState={!checkValidEmail(currentState?.email ?? '')}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              isPassword={true}
              name="password"
              type="password"
              label="Password"
              placeholder="Please enter your password"
              startIcon={<LockIcon className="text-main" />}
              value={currentState?.password ?? ''}
              onChange={handleChange}
              errorText="Password should be over 8 letters"
              errorState={(currentState?.password ?? '').length < 8}
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
              value={currentState?.rePassword ?? ''}
              onChange={handleChange}
              errorText="Password is not matched"
              errorState={currentState?.password !== currentState.rePassword}
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
                    value={currentState?.vCode ?? ''}
                    onChange={handleChange}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              label="Invites"
              name="invites"
              placeholder="Optional"
              value={currentState?.invites ?? ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" size="large" type="submit" fullWidth>
              Sign Up
            </Button>
          </Grid>

          <Grid item xs={12} className="text-center text-main">
            <label className="text-title">Do you have a account?</label>
            <Link to={`sign-in`}>Sign in now</Link>
          </Grid>
        </Grid>
      </form>
    </Layout>
  )
}
