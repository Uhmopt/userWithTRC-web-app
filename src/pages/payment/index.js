/* eslint-disable react-hooks/exhaustive-deps */
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Button, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import CustomInput from 'components/CustomInput'
import LevelAuthorityTable from 'components/LevelAuthorityTable'
import MainTitle from 'components/MainTitle'
import StaticCard from 'components/StaticCard'
import UserLevelIcon from 'components/UserLevelIcon'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import notification from 'lib/notification'
import { submitHash, GetAmountAddress } from 'store/actions/payment'
import Layout from '../../layouts'

const defaultState = {
  hash: '',
  transforAmount: 10,
  walletAddress: '',
}

export default function Payment() {
  const [currentState, setCurrentState] = useState(defaultState)
  const user = useSelector((state) => state?.auth?.user ?? {})
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    setCurrentState((prevState = defaultState) => ({
      ...(prevState ?? defaultState),
      transforAmount: 10 + Number(user?.user_rid ?? 2000) / 1000000,
    }))
    dispatch(
      GetAmountAddress(user?.user_level, user?.user_superior_id ?? ''),
    ).then((res) => {
      if (res?.result) {
        setCurrentState((prevState = defaultState) => ({
          ...(prevState ?? defaultState),
          transforAmount:
            Number(res?.result?.neccesary_amount ?? 0) +
            Number(user?.user_rid ?? 2000) / Math.pow(10, 6),
          walletAddress: res?.result?.superior_wallet_address ?? '',
        }))
      }
    })
  }
  const handleChange = (e) => {
    setCurrentState((prevState = defaultState) => ({
      ...(prevState ?? defaultState),
      [e.target.name]: e.target.value,
    }))
  }

  const handleClick = async () => {
    if (!(currentState?.hash ?? '')) {
      notification('error', 'Please enter the hash code!')
      return false
    }
    dispatch(submitHash(currentState?.hash ?? '')).then((res) => {
      console.log(res, 'THIS IS THE FRONTEND')
      if (!(res?.result ?? '')) {
        notification('error', res?.msg ?? 'Upgrade Failed')
        return false
      }
      history.push('highest-level')
    })
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(currentState?.walletAddress ?? '')
  }

  const upgradeUser = (
    <>
      <div className="text-title text-left text-sm">
        <div className="flex items-center">
          <div className="relative">
            <UserLevelIcon
              levelNum={Number(user?.user_level ?? 0) + 1}
              alt="Star"
              className=" w-14 inline-block"
              iconClass="user-level-icon-large"
            />
          </div>
          <span className="text-2xl">
            Upgrade V{Number(user?.user_level ?? 0) + 1} user
          </span>
        </div>
        <div>
          <span>Please transfer</span>{' '}
          <span className="text-main">
            {currentState?.transforAmount ?? 10}
          </span>{' '}
          <span>usdt (trc20) to the following wallet.</span>
        </div>
        <div className="pt-3">
          <span className="font-bold">USDT Amount:</span>{' '}
          <span className="text-main">
            {currentState?.transforAmount ?? 10}
          </span>
        </div>
        <div className="items-center sm:flex pt-3">
          <span className="font-bold">Wallet address :</span>
          <div className="text-main m-3">
            <span>{currentState?.walletAddress ?? ''}</span>
            <IconButton onClick={handleCopy}>
              <ContentCopyIcon className="text-main" />
            </IconButton>
          </div>
        </div>
        <div className="text-warnning text-sm pb-3">
          <span className="font-bold">Warning :</span>
          <span>
            {' '}
            Please pay {currentState?.transforAmount ?? 10} usdt strictly,
            otherwise it cannot be upgraded automatically.
          </span>
        </div>
        <div className="flex items-center text-title pt-3">
          <span>Hash:</span>
          <div className="w-full ml-3">
            <CustomInput
              name="hash"
              value={currentState.hash}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  )

  return (
    <Layout isLogin={true} title="Payment" before="upgrade" menuIndex={2}>
      <Box className="rounded-md h-20 self-center align-middle text-center">
        <StaticCard content1={upgradeUser} />
      </Box>
      <Box className="pt-80"></Box>
      <Box>
        {/* <Link to={`highest-level`}> */}
        <Button
          onClick={handleClick}
          type="button"
          variant="contained"
          size="large"
          fullWidth
          className="capitalize"
        >
          Submit
        </Button>
        {/* </Link> */}
        <MainTitle className="pt-8" />
      </Box>
      <LevelAuthorityTable userLevel={Number(user?.user_level ?? 0)} />
    </Layout>
  )
}
