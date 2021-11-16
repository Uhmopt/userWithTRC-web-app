/* eslint-disable react-hooks/exhaustive-deps */
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
import { useTranslation } from "react-i18next";

const defaultSignInfo = {
  email: '',
  password: '',
  isRemember: false,
  lang: 'en'
}
export default function SignIn() {
  const { t } = useTranslation()
  const { i18n } = useTranslation();
  const [currentState, setCurrentState] = useState(defaultSignInfo)
  const dispatch = useDispatch()
  const history = useHistory()
  const auth = useSelector((state) => state?.auth ?? {})

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    if ((auth?.isAuth ?? false) && (auth?.isAdmin ?? false) && (auth?.token ?? '')){
      history.push('/back/settings');
    } else {
      if ((auth?.isAuth ?? '') && (auth?.token ?? '')) {
        history.push('/home');
      }
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
    ).then(async (res) => {
      if (res?.isVerifyRequired ?? false) {
        notification(
          'error',
          t(res?.msg) ?? t('verifyAccount'),
        )
        history.push({ pathname: 'verification', state: 'sign-in' })
        return false
      } else {
        if (res?.result ?? false) {
          if (res?.result?.user_role === 3) {
            history.push('/back/settings')
          } else {
          history.push('/home')
        }
          notification('success', t(res?.msg))
        } else {
          notification(
            'error', t(res?.msg) ??
            t('makeSureNetConnection'),
          )
        }
      }

      Promise.resolve()
    })
  }

  const handleLangSelect = async (e) => {
    i18n.changeLanguage(e.target.value ?? "en");
    localStorage.setItem("language", e.target.value ?? "en");
    setCurrentState((prevState = defaultSignInfo) => ({
      ...(prevState ?? defaultSignInfo),
      lang: e.target.value,
    }))
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <Logo variant="icon" className="text-main m-auto" />
          </Grid>
          <Grid item xs={12}>
            <MainTitle title={t('signIn')} isLine={true} />
          </Grid>
          <Box className="w-full text-right -mt-14">
            <LangSelect lang={currentState.lang} onChange={handleLangSelect} />
          </Box>
          <Grid item xs={12}>
            <CustomInput
              isEmail={true}
              name="email"
              type="email"
              label={t('email')}
              placeholder={t('eamilDscrpt')}
              startIcon={<MailIcon className="text-main" />}
              value={currentState?.email ?? ''}
              onChange={handleChange}
              errorText={t('emailNotMatch')}
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
              label={t('password')}
              type="password"
              placeholder={t('passwordDscrpt')}
              startIcon={<LockIcon className="text-main" />}
              value={currentState?.password ?? ''}
              onChange={handleChange}
              errorText={t('passwordOver')}
              errorState={
                !Boolean(currentState?.password)
                  ? false
                  : (currentState?.password ?? '').length < 8
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} className="text-right">
                <Link to={`forgot-password`} className="text-green-500">
                  <span>{t('forgotPassword')}</span>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" size="large" fullWidth>
              {t('signIn')}
            </Button>
          </Grid>
          <Grid item xs={12} className="text-center text-main">
            <label className="text-title">{t('noAccount')}</label>
            <Link to={`register`}>
              <span>{t('registerNow')}</span>
            </Link>
          </Grid>
        </Grid>
      </form>
    </Layout>
  )
}
