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
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from 'store/actions/auth'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import notification from 'lib/notification'

const defaultSignInfo = {
  email: '',
  password: '',
  verifyCode: '',
  vCode: '',
  isRemember: false,
}
export default function SignIn() {
  const [currentState, setCurrentState] = useState(defaultSignInfo)
  const dispatch = useDispatch()
  const history = useHistory()
  
  const handleChange = (e) => {
    setCurrentState((prevState = defaultSignInfo) => ({
      ...(prevState ?? defaultSignInfo),
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(currentState.email, currentState.password))
      .then((res) => {
        history.push("/home");
        Promise.resolve()
      })
      .catch(() => {
        notification( 'success', 'Username or password is incorrect!' );
        // toastr.warning('Username or password is incorrect!')
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
