/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import CustomInput from 'components/CustomInput'
import Logo from 'components/Logo'
import MainTitle from 'components/MainTitle'
import Layout from 'layouts'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { verification } from 'store/actions/auth'
import { useHistory } from 'react-router'
import notification from 'lib/notification'
import { forgotPassword } from 'store/actions/auth'
import VerificationInput from 'react-verification-input'

const defaultVerification = {
  verifyCode: '',
}
export default function Verification(props) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const history = useHistory()
  const [currentState, setCurrentState] = useState(defaultVerification)

  const handleChange = (e) => {
    setCurrentState((prvState = defaultVerification) => ({
      ...(prvState ?? defaultVerification),
      verifyCode: e,
    }))
    console.log(e)
  }
  const handleResend = () => {
    dispatch(forgotPassword(user.user_email)).then((res) => {
      Boolean(res?.result ?? false)
      if (res?.result ?? false) {
        notification('success', res?.msg ?? 'success')
      } else {
        notification('error', res?.msg ?? 'Something went wrong.')
      }
      Promise.resolve()
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (user?.user_email ?? false) {
      dispatch(verification(user.user_email, currentState.verifyCode))
        .then((res) => {
          if (Boolean(res?.result ?? false)) {
            const url = props?.location?.state ?? 'home'
            history.push(`${url}`)
            notification('success', res?.msg ?? 'success')
          } else {
            console.log(res)
            notification('error', res?.msg ?? 'error')
          }
          Promise.resolve()
        })
        .catch((err) => {
          console.log(err, 'err')
        })
    }
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <Logo variant="icon" className="text-main m-auto" />
          </Grid>
          <Grid item xs={12}>
            <MainTitle title="Verify your account" isLine={true} />
          </Grid>

          {/* <Grid item xs={12}>
            <TextField
              required={true}
              InputProps={{
                endAdornment: (
                  <Button onClick={handleResend} position="end">
                    Resend
                  </Button>
                ),
                disableUnderline: true,
                className: 'px-6 text-xl text-5xl h-16',
                style: { fontSize: '2rem', letterSpacing: '8px' },
              }}
              value={currentState?.verifyCode ?? ''}
              placeholder="000000"
              onChange={handleChange}
              className={`bg-light rounded-md border border-transparent`}
              variant="standard"
              fullWidth
            />
          </Grid> */}
          <Grid>
          </Grid>
          <Grid item xs={12}>
            <div className="pt-8">
            <label className="text-main mx-2 sm:mx-4 mg:mx-4 lg:mx-4 xl:mx-4">verify code</label>
              <VerificationInput
                removeDefaultStyles
                validChars="0-9"
                classNames={{
                  character:
                    'rounded-md bg-light text-3xl py-2 w-8 border-main text-center mx-2 sm:mx-4 mg:mx-4 lg:mx-4 xl:mx-4 transition-colors focus:outline-none',
                  characterSelected: 'bg-gray-100',
                }}
                onChange={handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid container className="flex items-center pt-8">
              <Grid item xs={8}>
                <p className="text-md text-title">
                  Didn't get a code?{' '}
                  <a className="text-main hover:underline" href="#" onClick={handleResend}>
                    Resend
                  </a>
                </p>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Layout>
  )
}
