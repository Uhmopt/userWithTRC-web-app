/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@mui/system'
import Banner from 'components/Banner'
import LevelCardTable from 'components/LevelCardTable'
import MainTitle from 'components/MainTitle'
import StaticCard from 'components/StaticCard'
import UserLevelIcon from 'components/UserLevelIcon'
import momentDate from 'lib/momentDate'
import revenue from 'services/revenue.service'
import { getFriendArray } from 'services/user.service'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getLeveList, getPaymentList, getUserList, getUserInfo } from 'store/actions/home'
import Layout from '../../layouts'

const defaultState = {
  levels: [],
  totalRevenue: 0,
  totalPeople: 0,
}

export default function Home() {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state?.auth?.user ?? {})
  const home = useSelector((state) => state?.home ?? {})
  const [currentState, setCurrentState] = useState(defaultState)

  useEffect(() => {
    dispatch(getUserInfo(user?.user_id ?? ''))
    dispatch(getLeveList())
    dispatch(getUserList())
    dispatch(getPaymentList(user?.user_id ?? ''))
  }, [])

  useEffect(() => {
    init()
  }, [home])

  const init = () => {
    const userListByLevelFriend = getFriendArray( user?.user_id ?? -1, home?.userList ?? [] )
    const tmpRevenue = revenue.calTotalRevenue(
      home?.paymentList ?? [],
      user?.user_id ?? '',
    )
    const totalPeople = (userListByLevelFriend ?? []).reduce( (x, y) => x + y.length, 0 );
    setCurrentState((prevState = defaultState) => ({
      ...(prevState ?? defaultState),
      levels: userListByLevelFriend,
      totalRevenue: Number.parseFloat(tmpRevenue).toFixed(6),
      totalPeople: totalPeople
    }))
  }

  const handleClick = (level) => {
    typeof level === 'number' &&
      history.push({ pathname: 'level-users', state: level })
  }

  const banner = (
    <Banner
      icon={
        <UserLevelIcon
          levelNum={user?.user_level ?? 0}
          alt="Star"
          className="mx-auto w-10"
          iconClass="user-level-icon-small"
        />
      }
      upperIcon={
        <UserLevelIcon
          levelNum={(user?.user_level ?? 0) + 1}
          alt="Star"
          className=" w-14 inline-block ml-12"
          iconClass="user-level-icon-large"
        />
      }
      id={user?.user_rid ?? 2000}
      mail={user?.user_email ?? 'admin@admin.com'}
      joinTime={momentDate.timestampToDate(user?.user_register_date ?? '')}
    />
  )
  const totalContent = (
    <>
      <div>
        <label className="text-main font-bold">Total Revenue</label>
        <br />
        <label className="font-bold text-title">
          {currentState.totalRevenue}
        </label>
        <label className="text-sm text-title">usdt</label>
      </div>
    </>
  )
  return (
    <Layout isLogin={true} isPadding={false} banner={banner} menuIndex={0}>
      <Box className="h-20 self-center align-middle text-center -mt-14">
        <StaticCard content1={totalContent} />
      </Box>
      <MainTitle
        title={
          <div>
            <span className="text-title mr-3">Total People:</span>
            <span>{currentState?.totalPeople ?? 0}</span>
          </div>
        }
        isLogin={true}
        className="py-8"
      />
      <LevelCardTable
        levelList={currentState?.levels ?? []}
        onClick={handleClick}
      />
    </Layout>
  )
}
