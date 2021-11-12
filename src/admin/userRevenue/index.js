/* eslint-disable react-hooks/exhaustive-deps */
import { Search } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import CustomInput from 'components/CustomInput'
import EditTable from 'components/EditTable'
import Layout from 'layouts'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { payTableItems } from 'services/payment.service'
import { getUserPayment, getUser } from 'store/actions/user'
const defaultState = {
  paymentList: [],
  previousPaymentList: [],
  searchItem: '',
  user: {},
}
export default function UserRevenue(props) {
  const history = useHistory()
  const user_id = props.location.state
  const tableItems = payTableItems()
  const dispatch = useDispatch()
  const [currentState, setCurrentState] = useState({})

  useEffect(() => {
    if (!user_id) {
      history.push('users')
      return false
    }
    dispatch(getUser({ user_id: user_id })).then((res) => {
      setCurrentState((prevState = defaultState) => ({
        ...(prevState ?? defaultState),
        user: res?.result ?? {},
      }))
    })
    dispatch(getUserPayment(user_id)).then((res) => {
      const tmpList = (res?.result ?? []).map((item) => {
        return {
          user_rid: item?.user_rid,
          pay_amount: item?.pay_amount / Math.pow(10, 6),
          user_wallet_address: item?.user_wallet_address,
          user_email: item?.user_email,
          user_level: item?.user_level,
          pay_upgrade_time: moment(item?.pay_upgrade_time ?? '').format(
            'YYYY-MM-DD HH:mm:ss',
          ),
          pay_time: moment(item?.pay_time ?? '').format('YYYY-MM-DD HH:mm:ss'),
        }
      })
      setCurrentState((prevState = defaultState) => ({
        ...(prevState ?? defaultState),
        paymentList: tmpList,
        previousPaymentList: tmpList,
      }))
    })
  }, [user_id])
  useEffect(() => {
    const tmpPayList = (currentState?.previousPaymentList ?? []).filter(
      (item) => {
        return (
          item?.user_email?.includes(currentState?.searchItem) ||
          (item?.user_rid ?? '').toString().includes(currentState?.searchItem)
        )
      },
    )
    setCurrentState((prevState = defaultState) => ({
      ...(prevState ?? defaultState),
      paymentList: tmpPayList,
    }))
  }, [currentState?.searchItem])
  const handleSearch = (e) => {
    setCurrentState((prevState = defaultState) => ({
      ...(prevState ?? defaultState),
      searchItem: e.target.value,
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
          <CustomInput
            name="searItem"
            type="text"
            value={currentState?.searchItem ?? ''}
            endIcon={
              <IconButton onClick={console.log()} className="shadow-sm">
                <Search className="text-main" />
              </IconButton>
            }
            className="bg-white"
            placeholder="Please enter ID/Email"
            onChange={handleSearch}
          />
        </Grid>
        <Grid item xs={12}>
          <div className="pl-3 flex justify-start items-center">
            <label className="ml-3">
              ID: <span className="text-main font-bold"> {currentState?.user?.user_rid ?? ''}</span>{' '}
              
            </label>
            <label className="ml-3">
              Email: <span className="text-main font-bold">{currentState?.user?.user_email ?? ''}</span>{' '}
              
            </label>
            <label className="ml-3">
              Level: <span className="text-main font-bold">{currentState?.user?.user_level ?? ''} Star member </span>{' '}
              
            </label>
          </div>
          <div className="m-h-12 bg-white shadow-md">
            <EditTable
              rowList={currentState?.paymentList ?? []}
              itemList={tableItems}
              isEditAble={false}
            />
          </div>
        </Grid>
      </Grid>
    </Layout>
  )
}
