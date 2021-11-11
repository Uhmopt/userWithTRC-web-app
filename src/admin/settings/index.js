/* eslint-disable react-hooks/exhaustive-deps */
import { Email, Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  InputAdornment,
  TextField
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import CustomAccordion from 'components/CustomAccordion'
import CustomAutocomplete from 'components/CustomAutocomplete'
import EditTable from 'components/EditTable'
import SwitchWithLabel from 'components/SwitchWithLabel'
import Layout from 'layouts'
import notification from 'lib/notification'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInitSetting } from 'services/setting.service'
import { getAutoCompleteUsers } from 'services/user.service'
import { getLeveList } from 'store/actions/home'
import { getCurrentSetting, updateLevelAmount, updateSetting } from 'store/actions/setting'

const defaultSettings = {
  isLogin: true,
  isRegister: true,
  isUpgrade: true,
  specifiedUser: 0,
  smtpUser: '',
  smtpPass: '',
  adminEmail: '',
  levelList: [],
  showPass: false,
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    paddingTop: 0,
  },
})

export default function Settings(props) {
  const style = useStyles(props)
  const dispatch = useDispatch()
  const [currentState, setCurrentSate] = useState(defaultSettings)
  const home = useSelector((state) => state?.home ?? {})
  const user = useSelector((state) => state?.auth?.user ?? {})
  const levelItems = [
    {
      label: 'Level',
      key: 'level_degree',
    },
    {
      label: 'Amount',
      key: 'level_amount',
    },
  ]
  useEffect(() => {
    dispatch(getLeveList())
  }, [])
  useEffect(() => {
    init()
  }, [home])

  const init = () => {
    dispatch(getCurrentSetting()).then((res) => {
      const tmpSetting = getInitSetting(res)
      setCurrentSate((prevState = defaultSettings) => ({
        ...(prevState ?? defaultSettings),
        isLogin: tmpSetting?.isLogin ?? true,
        isRegister: tmpSetting?.isRegister ?? true,
        isUpgrade: tmpSetting?.isUpgrade ?? true,
        specifiedUser: tmpSetting?.specifiedUser ?? '',
        smtpUser: tmpSetting?.smtpUser ?? '',
        smtpPass: tmpSetting?.smtpPass ?? '',
        adminEmail: tmpSetting?.adminEmail ?? '',
      }))
    })
    const tmpLevelList = (home?.levelList ?? []).map((level) => {
      return {
        id: level.level_id,
        level_amount: level.level_amount / Math.pow(10, 6),
        level_degree: level.level_degree,
      }
    })
    setCurrentSate((prevState = defaultSettings) => ({
      ...(prevState ?? defaultSettings),
      levelList: tmpLevelList,
    }))
  }

  const handleClick = (e) => {
    setCurrentSate((prevState = defaultSettings) => ({
      ...(prevState ?? defaultSettings),
      [e.target.name]: e.target.checked,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( currentState )
    dispatch(updateSetting({ ...currentState, userId: user?.user_id })).then((res)=>{
      console.log( res )
      if (res?.result ?? false) {
        init()
        notification('success', res?.msg ?? 'success')
      } else {
        notification(
          'error',
          res?.msg ?? 'Please make sure your network connection.',
        )
      }
    });
  }
  const onSaveLevel = (event) => {
    dispatch( updateLevelAmount( user?.user_id, event?.id, event?.level_amount  ) ).then((res)=>{
      if (res?.result ?? false) {
        dispatch(getLeveList())
        notification('success', res?.msg ?? 'success')
      } else {
        notification(
          'error',
          res?.msg ?? 'Please make sure your network connection.',
        )
      }
    });
  }
  const handleChange = (e) => {
    setCurrentSate((prevState = defaultSettings) => ({
      ...(prevState ?? defaultSettings),
      [e.target.name]: e.target.value,
    }))
  }

  const handleAutocompete = (event, value) => {
    console.log(value)
    setCurrentSate((prevState = defaultSettings) => ({
      ...(prevState ?? defaultSettings),
      specifiedUser: value?.user_id ?? 0,
    }))
  }

  const handlePassShow = () => {
    setCurrentSate((prevState = defaultSettings) => ({
      ...(prevState ?? defaultSettings),
      showPass: !prevState?.showPass
    }))
  }

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
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  rowSpacing={3}
                  columnSpacing={3}
                  alignItems={'center'}
                >
                  <Grid item xs={6} lg={3}>
                    <SwitchWithLabel
                      label="Login"
                      name="isLogin"
                      value={currentState?.isLogin}
                      onClick={handleClick}
                    />
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <SwitchWithLabel
                      label="Register"
                      name="isRegister"
                      value={currentState?.isRegister}
                      onClick={handleClick}
                    />
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <SwitchWithLabel
                      label="Upgrade"
                      name="isUpgrade"
                      value={currentState?.isUpgrade}
                      onClick={handleClick}
                    />
                  </Grid>
                  <Grid item xs={6} lg={3}>
                    <CustomAutocomplete
                      label="Specified User"
                      value={Number(currentState?.specifiedUser) ?? 0}
                      userList={getAutoCompleteUsers(home?.userList ?? [])}
                      onChange={handleAutocompete}
                    />
                  </Grid>
                  <Grid item xs={6} md={6} lg={3}>
                    <label>Admin Email:</label>
                  </Grid>
                  <Grid item xs={6} md={6} lg={3}>
                    <TextField
                      required
                      name="adminEmail"
                      value={currentState?.adminEmail ?? ''}
                      onChange={handleChange}
                      label="Administrator"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} md={4} lg={2} className={style.root}>
                    <label>SMTP account setting:</label>
                  </Grid>
                  <Grid item xs={6} md={4} lg={2}>
                    <TextField
                      onChange={handleChange}
                      required
                      label="User"
                      type="email"
                      name="smtpUser"
                      value={currentState?.smtpUser ?? ''}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={6} md={4} lg={2}>
                    <TextField
                      onChange={handleChange}
                      type={currentState?.showPass ?? false ? 'text' :'password' }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handlePassShow}>
                              {currentState?.showPass?? false ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      required
                      label="Password"
                      name="smtpPass"
                      value={currentState?.smtpPass ?? ''}
                      variant="standard"
                    />
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
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          {/* Note : USDT amount for each levle */}
          <CustomAccordion>
            {' '}
            <EditTable
              rowList={currentState?.levelList ?? []}
              itemList={levelItems}
              onSave={onSaveLevel}
              isDeleteAble={false}
              disableEditList = {['level_degree']}
            />{' '}
          </CustomAccordion>
        </Grid>
      </Grid>
    </Layout>
  )
}
