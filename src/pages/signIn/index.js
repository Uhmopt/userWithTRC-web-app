/* eslint-disable react-hooks/exhaustive-deps */
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import LockIcon from '@mui/icons-material/Lock'
import MailIcon from '@mui/icons-material/Mail'
import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import CustomInput from 'components/CustomInput'
import LangSelect from 'components/LangSelect'
import Logo from 'components/Logo'
import MainTitle from 'components/MainTitle'
import Layout from 'layouts'
import notification from 'lib/notification'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { login } from 'store/actions/auth'
import checkValidEmail from 'lib/checkValidEmail'
import { useEffect } from 'react'

const defaultSignInfo = {
  email: '',
  password: '',
  isRemember: false,
}
export default function SignIn() {
  const [currentState, setCurrentState] = useState(defaultSignInfo)
  const dispatch = useDispatch()
  const history = useHistory()
  const auth = useSelector((state) => state?.auth ?? {})

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    if ((auth?.isAuth ?? '') && (auth?.token ?? '')) {
      history.push('home')
    }
  }

  const handleChange = (e) => {
    setCurrentState((prevState = defaultSignInfo) => ({
      ...(prevState ?? defaultSignInfo),
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ((currentState?.password ?? '').length < 8) {
      return false
    }
    dispatch(
      login(currentState.email, currentState.password, currentState.isRemember),
    ).then((res) => {
      if (res?.isVerifyRequired ?? false) {
        notification('error', res?.msg ?? 'Please make sure your network connection..')
        history.push({ pathname: 'verification', state: 'sign-in' })
        return false
      } else {
        Boolean(res?.result ?? false)
        if (res?.result ?? false) {
          console.log( res?.result )
          localStorage.setItem("access-token", JSON.stringify(res?.result?.user_token ?? ''));
          history.push('/home')
          notification('success', res?.msg ?? 'success')
        } else {
          notification('error', res?.msg ?? 'Please make sure your network connection..')
        }
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
            <MainTitle title="Sign In" isLine={true} />
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
              errorState={
                !Boolean(currentState?.email)
                  ? false
                  : !checkValidEmail(currentState?.email ?? '')
              }
            />
          </Grid>
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
            <Grid container>
              <Grid item xs={6}>
                <Box
                  className="cursor-pointer flex items-center text-main"
                  onClick={() => {
                    setCurrentState({
                      ...currentState,
                      isRemember: !Boolean(currentState?.isRemember ?? ''),
                    })
                  }}
                >
                  {Boolean(currentState?.isRemember ?? '') ? (
                    <CheckBoxIcon />
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                  <span>Remember me</span>
                </Box>
              </Grid>
              <Grid item xs={6} className="text-right">
                <Link to={`forgot-password`} className="text-green-500">
                  <span>Forgot password</span>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" size="large" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} className="text-center text-main">
            <label className="text-title">Don't you have a account?</label>
            <Link to={`register`}>
              <span>Register now</span>
            </Link>
          </Grid>
        </Grid>
      </form>
    </Layout>
  )
}
