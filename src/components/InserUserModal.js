/* eslint-disable react-hooks/exhaustive-deps */
import { Mail, Visibility, VisibilityOff } from '@mui/icons-material'
import { Grid, IconButton, Radio } from '@mui/material'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import checkValidEmail from 'lib/checkValidEmail'
import * as React from 'react'
import { useState } from 'react'
import CustomInput from './CustomInput'

const defaultUser = {
  email: '',
  password: '',
  invite: '',
  walletAddress: '',
  showPass: false,
  role: 0,
}
export default function InsertUserModal({
  isOpen = false,
  openModal = () => {},
  onSubmit = () => {},
}) {
  const handleClose = () => openModal()
  const [currentState, setCurrentState] = useState(defaultUser)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (typeof onSubmit === 'function') {
      onSubmit(currentState)
    }
    // dispatch(insertUser())
  }
  const handleChange = (e) => {
    console.log(e)
    setCurrentState((prevState = defaultUser) => ({
      ...(prevState ?? defaultUser),
      [e.target.name]: e.target.value,
    }))
  }
  const handleCheck = (e) => {
    console.log(e.target.value)
    setCurrentState((prevState = defaultUser) => ({
      ...(prevState ?? defaultUser),
      role: e.target.value,
    }))
  }

  const handlePassShow = () => {
    setCurrentState((prevState = defaultUser) => ({
      ...(prevState ?? defaultUser),
      showPass: !prevState?.showPass,
    }))
  }
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md p-8 shadow-md ">
          <form onSubmit={handleSubmit}>
            <Grid container rowSpacing={3}>
              <Grid item xs={12}>
                <CustomInput
                  isEmail={true}
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Please enter your email"
                  startIcon={<Mail className="text-main" />}
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
                  name="walletAddress"
                  placeholder="Please enter your personal wallet address"
                  value={currentState?.walletAddress ?? ''}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomInput
                  label="Password"
                  name="password"
                  type={currentState?.showPass ?? false ? 'text' : 'password'}
                  value={currentState?.password ?? ''}
                  placeholder="Please enter your password"
                  errorText="Password should be over 8 letters"
                  onChange={handleChange}
                  endIcon={
                    <IconButton onClick={handlePassShow}>
                      {currentState?.showPass ?? false ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  }
                  errorState={
                    !Boolean(currentState?.password)
                      ? false
                      : (currentState?.password ?? '').length < 8
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <CustomInput
                  label="Invites"
                  name="invite"
                  placeholder="Optional"
                  required={false}
                  value={currentState?.invite ?? ''}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <div>
                  <span>Admin</span>
                  <Radio
                    checked={Number(currentState.role) === 1}
                    onChange={handleCheck}
                    value={1}
                    name="admin"
                    inputProps={{ 'aria-label': 'Admin' }}
                  />
                  <span>User</span>
                  <Radio
                    checked={Number(currentState.role) === 0}
                    onChange={handleCheck}
                    value={0}
                    name="user"
                    inputProps={{ 'aria-label': 'User' }}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  fullWidth
                >
                  Insert
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Modal>
    </div>
  )
}
