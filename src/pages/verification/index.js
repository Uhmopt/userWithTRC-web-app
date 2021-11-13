/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Grid } from '@mui/material'
import Logo from 'components/Logo'
import MainTitle from 'components/MainTitle'
import Layout from 'layouts'
import notification from 'lib/notification'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import VerificationInput from 'react-verification-input'
import { forgotPassword, verification } from 'store/actions/auth'
import { contactVerify } from 'store/actions/home'

const defaultVerification = {
  verifyCode: '',
}
export default function Verification(props) {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const history = useHistory()
  const [currentState, setCurrentState] = useState(defaultVerification)

  const handleChange = (e) => {
    setCurrentState((prvState = defaultVerification) => ({
      ...(prvState ?? defaultVerification),
      verifyCode: e,
    }))
  }
  const handleResend = () => {
    dispatch(forgotPassword(user.user_email)).then((res) => {
      Boolean(res?.result ?? false)
      if (res?.result ?? false) {
        notification('success', t(res?.msg) ?? 'success')
      } else {
        notification('error', t(res?.msg) ?? 'Please make sure your network connection..')
      }
      Promise.resolve()
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const url = props?.location?.state ?? 'home'
    if (url === 'contact-us') {
      dispatch(contactVerify((props?.location?.params ?? 0), currentState?.verifyCode ?? ''))
      .then((res) => {
        if (Boolean(res?.result ?? false)) {
          history.push(`${url}`)
          notification('success', t(res?.msg) ?? 'success')
        } else {
          console.log(res)
          notification('error', t(res?.msg) ?? 'Please make sure your network connection!')
        }
        Promise.resolve()
      })
      .catch((err) => {
        console.log(err, 'err')
      })
    } else {
      if (user?.user_email ?? false) {
        dispatch(verification(user.user_email, currentState?.verifyCode ?? ''))
          .then((res) => {
            if (Boolean(res?.result ?? false)) {
              history.push(`${url}`)
              notification('success', t(res?.msg) ?? 'success')
            } else {
              console.log(res)
              notification('error', t(res?.msg) ?? 'Please make sure your network connection!')
            }
            Promise.resolve()
          })
          .catch((err) => {
            console.log(err, 'err')
          })
      }
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
            <MainTitle title={t('verifyAccount')} isLine={true} />
          </Grid>
          <Grid item xs={12}>
            <div className="pt-8">
              <label className="text-main mx-2 sm:mx-4 mg:mx-4 lg:mx-4 xl:mx-4">
                {t('verifyCode')}
              </label>
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
                    {t('getCode')}
                  <a
                    className="text-main hover:underline"
                    href="#"
                    onClick={handleResend}
                  >
                    {t('resend')}
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
                  {t('submit')}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Layout>
  )
}
