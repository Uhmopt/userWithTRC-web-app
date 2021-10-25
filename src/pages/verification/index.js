import { Button, Grid } from '@mui/material'
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
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (user?.user_email ?? false) {
      dispatch(verification(user.user_email, currentState.verifyCode))
        .then((res) => {
          if (Boolean(res?.result ?? false)) {
            const url = props?.location?.state ?? 'sign-in'
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
          <Grid item xs={12}>
            <CustomInput
              label="Verification Code"
              name="verifyCode"
              type="number"
              placeholder="Please enter the code"
              value={currentState?.verifyCode ?? ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Box className="pt-6">
              <Button variant="contained" size="large" type="submit" fullWidth>
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Layout>
  )
}
