/* eslint-disable react-hooks/exhaustive-deps */
import LockIcon from '@mui/icons-material/Lock'
import MailIcon from '@mui/icons-material/Mail'
import { Button, Grid } from '@mui/material'
import CustomInput from 'components/CustomInput'
import MainTitle from 'components/MainTitle'
import React, { useState, useEffect } from 'react'
import Layout from '../../layouts'
import checkValidEmail from 'lib/checkValidEmail'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import notification from 'lib/notification'
import { useDispatch } from 'react-redux'
import { updateUser } from 'store/actions/home'
import { useTranslation } from 'react-i18next'

const defaultUpdateInfo = {
  email: '',
  address: '',
  password: '',
  rePassword: '',
}

export default function UpdateUser() {
  const {t} = useTranslation()
  const [currentState, setCurrentState] = useState(defaultUpdateInfo)
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state?.auth?.user ?? {})
  useEffect(() => {
    setCurrentState((prevState = defaultUpdateInfo) => ({
      ...(prevState ?? defaultUpdateInfo),
      email: user?.user_email ?? '',
      address: user?.user_wallet_address ?? '',
      password: '',
      rePassword: '',
    }))
  }, [])

  const handleChange = (e) => {
    setCurrentState((prevState = defaultUpdateInfo) => ({
      ...(prevState ?? defaultUpdateInfo),
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      0 < (currentState?.password ?? '').length < 8 &&
      currentState?.password !== currentState?.rePassword
    ) {
      return false
    }
    dispatch(
      updateUser(
        user?.user_id ?? '',
        currentState.email,
        currentState.password,
        currentState.address,
      ),
    )
      .then((res) => {
        if (res?.result ?? false) {
          history.push({ pathname: 'verification', state: 'home' })
          notification('success', t(res?.msg) ?? 'success')
        } else {
          notification('error', t(res?.msg) ?? t('makeSureNetConnection'))
        }
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }
  return (
    <Layout
      isLogin={true}
      title="Update Information"
      before="home"
      menuIndex={2}
    >
      <MainTitle
        title={<label className="text-xl text-title">Revise resume</label>}
        isLogin={true}
        className="pb-12"
      />
      <form onSubmit={handleSubmit}>
        <Grid
          container
          rowSpacing={3}
          className="bg-white rounded-md shadow-md p-8 pb-24 mb-32"
        >
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
              label="USDT_TRC20"
              name="address"
              value={currentState.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} className="text-xs text-title pt-4">
            {t('updateTip')}
          </Grid>
          <MainTitle />
          <Grid item xs={12}>
            <CustomInput
              isPassword={true}
              name="password"
              label={t('password')}
              type="password"
              required={false}
              placeholder={t('passwordDscrpt')}
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
            <CustomInput
              name="rePassword"
              type="password"
              required={false}
              label={t('confirmPassword')}
              placeholder={t('confirmPassword')}
              startIcon={<LockIcon className="text-main" />}
              value={currentState.rePassword}
              onChange={handleChange}
              errorText={t('passwordNotMatch')}
              errorState={currentState?.password !== currentState.rePassword}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" size="large" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Layout>
  )
}
