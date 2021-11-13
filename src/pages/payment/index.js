/* eslint-disable react-hooks/exhaustive-deps */
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Button, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import CustomInput from 'components/CustomInput'
import LevelAuthorityTable from 'components/LevelAuthorityTable'
import MainTitle from 'components/MainTitle'
import StaticCard from 'components/StaticCard'
import UserLevelIcon from 'components/UserLevelIcon'
import { getLevels } from 'lib/levels'
import notification from 'lib/notification'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getAmountAddress, submitHash } from 'store/actions/payment'
import copy from 'copy-to-clipboard'
import Layout from '../../layouts'
import { getMaxLevel } from 'lib/levels'
import { useTranslation } from 'react-i18next'

const defaultState = {
  hash: '',
  transforAmount: 10,
  walletAddress: '',
  levelList: [],
  levelNum: 0,
}

export default function Payment() {
  const [currentState, setCurrentState] = useState(defaultState)
  const user = useSelector((state) => state?.auth?.user ?? {})
  const levels = useSelector((state) => state?.home?.levelList ?? [])
  const dispatch = useDispatch()
  const history = useHistory()
  const {t} = useTranslation()

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    const tmpLevelList = getLevels(levels)
    if(Number(user?.user_level ?? 0) + 1 > getMaxLevel(tmpLevelList ?? [])){
      history.push('/highest-level')
    }
    setCurrentState((prevState = defaultState) => ({
      ...(prevState ?? defaultState),
      transforAmount: 10 + Number(user?.user_rid ?? 2000) / 1000000,
      levelList: tmpLevelList,
      levelNum:
        Number(user?.user_level ?? 0) + 1 > getMaxLevel(tmpLevelList ?? [])
          ? getMaxLevel(tmpLevelList ?? [])
          : Number(user?.user_level ?? 0) + 1,
    }))
    dispatch(
      getAmountAddress(user?.user_level, user?.user_superior_id ?? ''),
    ).then((res) => {
      if (res?.result) {
        setCurrentState((prevState = defaultState) => ({
          ...(prevState ?? defaultState),
          transforAmount:
            (Number(res?.result?.neccesary_amount ?? 0) +
              Number(user?.user_rid ?? 2000)) /
            Math.pow(10, 6),
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
      notification('error', t('enterHash'))
      return false
    }
    dispatch(submitHash(currentState?.hash ?? '')).then((res) => {
      if (!(res?.result ?? '')) {
        if (res?.msg) {
           notification('error', t(res?.msg) ?? 'Upgrade failed')
        } else {
          notification('error', t('walletNotMatch'))
        }
        
        return false
      }
      notification('success', t(res?.msg) ?? 'Upgrade success!')
      if (
        res?.result?.user_level ??
        0 === getMaxLevel(currentState?.levelList ?? [])
      ) {
        history.push('/highest-level')
      } else {
        history.push('/upgrade')
      }
    })
  }
  const handleCopy = () => {
    copy(currentState?.walletAddress ?? '')
  }
  const upgradeUser = (
    <>
      <div className="text-title text-left text-sm">
        <div className="flex items-center">
          <div className="relative">
            <UserLevelIcon
              levelNum={currentState?.levelNum ?? 0}
              alt="Star"
              className=" w-14 inline-block"
              iconClass="user-level-icon-large"
            />
          </div>
          <span className="text-2xl">
            {t('upgrade')} V
            {currentState?.levelNum ?? 0}
            {t('user')}
          </span>
        </div>
        <div>
          <span>{t('pleaseTransfer')}</span>{' '}
          <span className="text-main">
            {currentState?.transforAmount ?? 10}
          </span>{' '}
          <span>usdt (trc20) {t('toFollowingWallet')}</span>
        </div>
        <div className="pt-3">
          <span className="font-bold">USDT {t('amount')}:</span>{' '}
          <span className="text-main">
            {currentState?.transforAmount ?? 10}
          </span>
        </div>
        <div className="items-center sm:flex pt-3">
          <span className="font-bold">{t('walletAddress')} :</span>
          <div className="text-main m-3">
            <span>{currentState?.walletAddress ?? ''}</span>
            <IconButton onClick={handleCopy}>
              <ContentCopyIcon className="text-main" />
            </IconButton>
          </div>
        </div>
        <div className="text-warnning text-sm pb-3">
          <span className="font-bold">{t('warning')} :</span>
          <span>
            {' '}
            {t('pleasePay')} {currentState?.transforAmount ?? 10} {t('usdtStrictly')}
          </span>
        </div>
        <div className="flex items-center text-title pt-3">
          <span>{t('hash')}:</span>
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
    <Layout isLogin={true} title={t('payment')} before="upgrade" menuIndex={2}>
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
          {t('submit')}
        </Button>
        {/* </Link> */}
        <MainTitle className="pt-8" />
      </Box>
      <LevelAuthorityTable
        levelList={currentState?.levelList ?? []}
        userLevel={Number(user?.user_level ?? 0)}
      />
    </Layout>
  )
}
