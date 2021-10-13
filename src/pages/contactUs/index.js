import React from 'react'
import Layout from '../../layouts'
import MainTitle from 'components/MainTitle'
import CustomInput from 'components/CustomInput'
import MailIcon from '@mui/icons-material/Mail'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import { Button, Grid, TextareaAutosize } from '@mui/material'
import { useState } from 'react'

export default function ContactUs() {
  const [currentState, setCurrentState] = useState({
    email: '',
    verifyCode: '',
    id: '',
    theme: '',
    contact: '',
  })
  const onChange = (e) => {
    setCurrentState({
      ...currentState,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <Layout isLogin={true} title="Contact Us" before="home" menuIndex={4}>
      <MainTitle
        title={<label className="text-xl text-title">Write to me</label>}
        isLogin={true}
        className="py-10"
      />
      <Box className="bg-white rounded-md shadow-md p-8 pb-24 mb-32">
        <div className="pt-8 w-full">
          <CustomInput
            isEmail={true}
            name="email"
            type="email"
            label="Email"
            placeholder="Please enter your email"
            startIcon={<MailIcon className="text-main" />}
            value={currentState.email}
            onChange={onChange}
          />
        </div>
        <div className="pt-8 w-full">
          <CustomInput
            label="ID"
            name="id"
            value={currentState.id}
            onChange={onChange}
          />
        </div>
        <div className="pt-8 w-full">
          <CustomInput
            label="Theme"
            name="theme"
            value={currentState.theme}
            onChange={onChange}
          />
        </div>
        <div className="pt-8 w-full">
          <label className="text-main">Contact</label>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Empty"
            minRows="3"
            className="bg-light w-full rounded-md p-3 h-24 outline-none"
            name="contact"
            value={currentState.contact}
            onChange={onChange}
          />
        </div>
        <Grid container className="pt-8 w-full">
          <Grid item xs={7}>
            <CustomInput
              label="Verification Code"
              name="verifyCode"
              placeholder="Please enter the code"
              value={currentState.verifyCode}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4} className="pt-6">
            <CustomInput
              name="vCode"
              placeholder="8245"
              value={currentState.vCode}
              onChange={onChange}
            />
          </Grid>
        </Grid>
        <div className="pt-8">
          <Link to={`#`}>
            <Button type="button" variant="contained" size="large" fullWidth>
              Submit
            </Button>
          </Link>
        </div>
      </Box>
    </Layout>
  )
}
