/* eslint-disable react-hooks/exhaustive-deps */
import { Search } from '@mui/icons-material'
import { Button, Card, CardHeader, Grid, IconButton } from '@mui/material'
import CustomInput from 'components/CustomInput'
import EditTable from 'components/EditTable'
import Layout from 'layouts'
import notification from 'lib/notification'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upgradeTableItems } from 'services/payment.service'
import { getPaymentHistory } from 'store/actions/payment'
import { useConfirm } from 'material-ui-confirm'
import { deletePayment } from 'store/actions/payment'
import { approvePayment } from 'store/actions/payment'

const defaultState = {
  payHistoryList: [],
  previousPaymentList: [],
  searchItem: '',
  user: {},
}

export default function UserUpgrade(props) {
  const dispatch = useDispatch()
  const [currentState, setCurrentState] = useState(defaultState)
  const auth = useSelector((state) => state?.auth ?? {})
  const confirm = useConfirm()
  const upgradeHistoryItmes = upgradeTableItems()

  useEffect(() => {
    init()
  }, [])
  useEffect(() => {
    const tmpPayList = (currentState?.previousPaymentList ?? []).filter(
      (item) => {
        return (
          item?.user_wallet_address?.includes(currentState?.searchItem) ||
          item?.upper_wallet?.includes(currentState?.searchItem) ||
          (item?.user_rid ?? '')
            .toString()
            .includes(currentState?.searchItem) ||
          (item?.upper_id ?? '').toString().includes(currentState?.searchItem)
        )
      },
    )
    setCurrentState((prevState = defaultState) => ({
      ...(prevState ?? defaultState),
      payHistoryList: tmpPayList,
    }))
  }, [currentState.searchItem])
  const init = () => {
    dispatch(getPaymentHistory()).then((res) => {
      const tmpList = changePaymentHistory(res?.result ?? [])
      setCurrentState((prevState = defaultState) => ({
        ...(prevState ?? defaultState),
        payHistoryList: tmpList,
        previousPaymentList: tmpList,
      }))
    })
  }
  // Note: Change all payment History as table data
  const changePaymentHistory = (paymentHistory = []) => {
    const tmpList = paymentHistory.map((payment) => {
      const operating = (
        <>
          {payment.pay_upgrade_state !== 1 && (
            <Button onClick={() => handleApproved(payment.pay_id)}>
              approved
            </Button>
          )}
          <br />
          <Button
            onClick={() => handleDeletePayment(payment.pay_id)}
            color="warning"
          >
            delete
          </Button>
        </>
      )
      return {
        user_rid: payment.user_rid,
        user_level: <label>{payment.pay_level} star</label>,
        pay_amount: payment.pay_amount / Math.pow(10, 6),
        upper_wallet: payment.pay_wallet_address,
        upper_id: payment.upper_id,
        pay_state:
          payment.pay_upgrade_state === 1 ? (
            <label className="text-main">Upgraded</label>
          ) : (
            <label>Waiting for payment</label>
          ),
        pay_time: moment(payment.pay_time).format('YYYY-MM-DD HH:mm:ss'),
        pay_upgrade_time: moment(payment.pay_upgrade_time ?? '').format(
          'YYYY-MM-DD HH:mm:ss',
        ),
        operation: operating,
      }
    })
    return tmpList
  }
  const handleSearch = (e) => {
    setCurrentState((prevState = defaultState) => ({
      ...(prevState ?? defaultState),
      searchItem: e.target.value,
    }))
  }
  // Note: Delete payment Data
  const handleDeletePayment = (e) => {
    confirm({ description: 'Do you want to delete the selected payment?' })
      .then(() => {
        const data = {
          pay_id: e,
          admin_id: auth?.user?.user_id ?? 0,
        }
        dispatch(deletePayment(data))
          .then((res) => {
            if (res?.result ?? false) {
              notification('success', res?.msg ?? 'success')
              init()
            } else {
              notification(
                'error',
                res?.msg ?? 'Please make sure your network connection.',
              )
            }
          })
          .catch((err) => {
            console.log(err, 'err')
          })
      })
      .catch(() => {})
  }
  // Note: Approve Payment
  const handleApproved = (e) => {
    const data = {
      pay_id: e,
      admin_id: auth?.user?.user_id ?? 0,
    }
    dispatch(approvePayment(data))
      .then((res) => {
        if (res?.result ?? false) {
          notification('success', res?.msg ?? 'success')
          init()
        } else {
          notification(
            'error',
            res?.msg ?? 'Please make sure your network connection.',
          )
        }
      })
      .catch((err) => {
        console.log(err, 'err')
      })
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
          <Card>
            <CardHeader title={<h1>Upgrade Management</h1>} />

            <div className="m-h-12 bg-white shadow-md">
              <EditTable
                rowList={currentState?.payHistoryList ?? []}
                itemList={upgradeHistoryItmes}
                isEditAble={false}
              />
            </div>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
