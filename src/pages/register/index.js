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
import checkValidEmail from 'lib/checkValidEmail'
import notification from 'lib/notification'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { register } from 'store/actions/auth'

const defaultUser = {
  email: '',
  password: '',
  rePassword: '',
  verifyCode: '',
  vCode: '',
  invite: '',
  walletAddress: '',
  lang: 'en'
}
export default function Register() {
  const { i18n } = useTranslation();
  const { t } = useTranslation()
  const [currentState, setCurrentState] = useState(defaultUser)
  const dispatch = useDispatch()
  const history = useHistory()
  const hashEmail = useParams()?.hashEmail ?? ''
  const inviteDisabled = hashEmail ? true : false
  useEffect(() => {
    setCurrentState((prevState = defaultUser) => ({
      ...(prevState ?? defaultUser),
      invite: hashEmail,
    }))
  }, [])
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
      return false
    }
    dispatch(
      register(
        currentState.email,
        currentState.password,
        currentState.walletAddress,
        currentState.invite,
      ),
    )
      .then((res) => {
        if (res?.result ?? false) {
          notification('success', t(res?.msg) ?? 'success')
          history.push({ pathname: '/home' })
        } else {
          notification(
            'error',
            t(res?.msg) ?? t('makeSureNetConnection'),
          )
        }
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }

  const handleLangSelect = async (e) => {
    i18n.changeLanguage(e.target.value ?? "en");
    localStorage.setItem("language", e.target.value ?? "en");
    setCurrentState((prevState = defaultUser) => ({
      ...(prevState ?? defaultUser),
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
            <MainTitle title={t('register')} isLine={true} />
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
            <CustomInput
              isPassword={true}
              name="rePassword"
              type="password"
              label={t('confirmPassword')}
              placeholder={t('passwordDscrpt')}
              startIcon={<LockIcon className="text-main" />}
              value={currentState?.rePassword ?? ''}
              onChange={handleChange}
              errorText={t('passwordNotMatch')}
              errorState={currentState?.password !== currentState.rePassword}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              label="USDT_TRC20"
              name="walletAddress"
              placeholder=""
              value={currentState?.walletAddress ?? ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              disabled={inviteDisabled}
              label={t('invites')}
              name="invite"
              placeholder=""
              required={false}
              value={currentState?.invite ?? ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" size="large" type="submit" fullWidth>
            {t('register')}
            </Button>
          </Grid>

          <Grid item xs={12} className="text-center text-main">
            <label className="text-title">{t('isAccount')}</label>
            <Link to={`/sign-in`}>{t('signInNow')}</Link>
          </Grid>
        </Grid>
      </form>
    </Layout>
  )
}
