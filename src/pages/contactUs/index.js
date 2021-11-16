/* eslint-disable react-hooks/exhaustive-deps */
import MailIcon from '@mui/icons-material/Mail'
import { Button, Grid, TextareaAutosize } from '@mui/material'
import CustomInput from 'components/CustomInput'
import MainTitle from 'components/MainTitle'
import notification from 'lib/notification'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { contactUs } from 'store/actions/home'
import Layout from '../../layouts'

const defaultContact = {
  email: '',
  rid: '',
  theme: '',
  contact: '',
}

export default function ContactUs() {
  const { t } = useTranslation()
  const [currentState, setCurrentState] = useState(defaultContact)
  const dispatch = useDispatch()
  const user = useSelector((state) => state?.auth?.user ?? {})
  useEffect(() => {
    setCurrentState((prvState = defaultContact) => ({
      ...(prvState ?? defaultContact),
      email: user?.user_email ?? '',
      rid: user?.user_rid ?? '',
    }))
  }, [])
  const handleChange = (e) => {
    setCurrentState((prvState = defaultContact) => ({
      ...(prvState ?? defaultContact),
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(contactUs({ ...currentState, userId: user?.user_id ?? '' }))
      .then((res) => {
        if (res?.result ?? false) {
          notification('success', t(res?.msg) ?? 'success')
          // history.push({ pathname: 'verification', state: 'contact-us', params: res?.result?.contact_id ?? 0 })
          setCurrentState((prvState = defaultContact) => ({
            ...(prvState ?? defaultContact),
            email: user?.user_email ?? '',
            rid: user?.user_rid ?? '',
          }))
        } else {
          notification(
            'error',
            t(res?.msg) ?? 'Please make sure your network connection!',
          )
        }
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }
  return (
    <Layout isLogin={true} title={t('contactUs')} before="home" menuIndex={4}>
      <MainTitle
        title={<label className="text-xl text-title">{t('writeMe')}</label>}
        isLogin={true}
      />
      <div className="py-7"></div>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          rowSpacing={3}
          className="bg-white rounded-md shadow-md px-8 pb-28"
        >
          <Grid item xs={12}>
            <CustomInput
              isEmail={true}
              name="email"
              type="email"
              label={t('email')}
              placeholder={t('eamilDscrpt')}
              startIcon={<MailIcon color="primary" />}
              value={currentState?.email ?? ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              label="ID"
              name="id"
              value={currentState?.rid ?? ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              label={t('theme')}
              name="theme"
              value={currentState?.theme ?? ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <span className="text-main">{t('contact')}</span>
            <TextareaAutosize
              aria-label="empty textarea"
              minRows="4"
              className="bg-light w-full rounded-md p-3 h-24 outline-none"
              name="contact"
              value={currentState?.contact ?? ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" size="large" fullWidth>
              {t('upgraded')}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Layout>
  )
}
