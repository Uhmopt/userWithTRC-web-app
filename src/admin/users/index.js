/* eslint-disable react-hooks/exhaustive-deps */
import { Email, Person } from '@mui/icons-material'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import CustomAccordion from 'components/CustomAccordion'
import CustomAutocomplete from 'components/CustomAutocomplete'
import EditTable from 'components/EditTable'
import SwitchWithLabel from 'components/SwitchWithLabel'
import Layout from 'layouts'
import React from 'react'

const defaultSettings = {
  email: '',
  rid: '',
  theme: '',
  contact: '',
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    paddingTop: 0,
  },
})

export default function Settings(props) {
  const style = useStyles(props)
  return (
    <Layout
      isLogin={true}
      maxWidth="xl"
      admin={true}
      title="Website configuration"
    >
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <h1>
                  <Email />
                  Admin Setting
                </h1>
              }
            />
            <CardContent className="text-main flex items-center justify-between">
              <Grid
                container
                rowSpacing={3}
                columnSpacing={3}
                alignItems={'center'}
              >
                <Grid item xs={6}>
                  <SwitchWithLabel label="Login" />
                </Grid>
                <Grid item xs={6}>
                  <SwitchWithLabel label="Register" />
                </Grid>
                <Grid item xs={6}>
                  <SwitchWithLabel label="Upgrade" />
                </Grid>
                <Grid item xs={6}>
                  <CustomAutocomplete />
                </Grid>
                <Grid item xs={12} md={4} className={style.root}>
                  <label>SMTP account setting:</label>
                </Grid>
                <Grid item xs={6} md={4}>
                  <TextField label="User" variant="standard" />
                </Grid>
                <Grid item xs={6} md={4}>
                  <TextField label="Password" variant="standard" />
                </Grid>
                <Grid item xs={6} md={3} alignItems={'center'}>
                  <label>Admin Email:</label>
                </Grid>
                <Grid item xs={6} md={3} alignItems={'center'}>
                  <TextField label="Administrator" variant="standard" />
                </Grid>
                <Grid item xs={6} md={3} alignItems={'center'}>
                  <label>Super User:</label>
                </Grid>
                <Grid item xs={6} md={3} alignItems={'center'}>
                  <TextField label="Specific User" variant="standard" />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    fullWidth
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          {/* Note : USDT amount for each levle */}
          <CustomAccordion>
            {' '}
            <EditTable />{' '}
          </CustomAccordion>
        </Grid>
      </Grid>
    </Layout>
  )
}
