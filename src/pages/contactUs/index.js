import MailIcon from '@mui/icons-material/Mail'
import { Button, Grid, TextareaAutosize } from '@mui/material'
import { Box } from '@mui/system'
import CustomInput from 'components/CustomInput'
import MainTitle from 'components/MainTitle'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../layouts'

export default function ContactUs() {
  const [currentState, setCurrentState] = useState({
    email: '',
    verifyCode: '',
    id: '',
    theme: '',
    contact: '',
  })
  const handleChange = (e) => {
    setCurrentState((prvState) => ({
      ...prvState,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <Layout isLogin={true} title="Contact Us" before="home" menuIndex={4}>
      <div xs={12}>
        <MainTitle
          title={<label className="text-xl text-title">Write to me</label>}
          isLogin={true}
        />
      </div>

      <Grid
        container
        rowSpacing={3}
        className="bg-white rounded-md shadow-md p-8"
      >
        <Grid item xs={12}>
          <CustomInput
            isEmail={true}
            name="email"
            type="email"
            label="Email"
            placeholder="Please enter your email"
            startIcon={<MailIcon color="primary" />}
            value={currentState?.email ?? ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInput
            label="ID"
            name="id"
            value={currentState?.id ?? ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInput
            label="Theme"
            name="theme"
            value={currentState?.theme ?? ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <span className="text-main">Contact</span>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Empty"
            minRows="3"
            className="bg-light w-full rounded-md p-3 h-24 outline-none"
            name="contact"
            value={currentState?.contact ?? ''}
            onChange={handleChange}
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
                  placeholder="8245"
                  value={currentState?.vCode ?? ''}
                  onChange={handleChange}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Link to={`#`} xs={12}>
            <Button type="button" variant="contained" size="large" fullWidth>
              Submit
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Layout>
  )
}
