/* eslint-disable react-hooks/exhaustive-deps */
import NavButton from 'components/NavButton'
import RevenueTable from 'components/RevenueTable'
import StaticCard from 'components/StaticCard'
import TableSwipeableViews from 'components/TableSwipeableViews'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import revenue from 'services/revenue.service'
import { getPaymentList } from 'store/actions/home'
import Layout from '../../layouts'

const defaultState = {
  tabNumber: 0,
  totalRevenue: 0,
  totalEarning: 0,
  dailyRevenueList: [],
  monthlyRevenueList: [],
}

export default function Revenue() {
  const dispatch = useDispatch()
  const [tabNumber, setTabNumber] = useState(0)
  const paymentList = useSelector((state) => state?.home?.paymentList ?? {})
  const user = useSelector((state) => state?.auth?.user ?? {})
  const [currentState, setCurrentState] = useState(defaultState)

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    dispatch(getPaymentList(user?.user_id ?? ''))
    const tmpRevenue = revenue.calTotalRevenue(paymentList ?? [], user?.user_id ?? '');
    const tmpEarning = revenue.calTotalEarning(paymentList ?? [], user?.user_id ?? '');
    const tmpDayList = revenue.calRevenueList(paymentList ?? [], user?.user_id ?? '');
    const tmpMonthList = revenue.calRevenueList(paymentList ?? [], user?.user_id ?? '', 'YYYY-MM');
    setCurrentState((prevState = defaultState) => ({
      ...(prevState ?? defaultState),
      totalRevenue: Number.parseFloat(tmpRevenue).toFixed(6),
      totalEarning: Number.parseFloat(tmpEarning).toFixed(6),
      dailyRevenueList: tmpDayList ?? [],
      monthlyRevenueList: tmpMonthList ?? [],
    }))
  }

  const handleChange = (param) => {
    setTabNumber(param)
  }

  const totalEarning = (
    <div>
      <span className=" text-main font-bold">Total Earning</span>
      <br />
      <span className="font-bold">{currentState?.totalEarning ?? ''}</span>
      <span className="font-bold text-sm">usdt</span>
    </div>
  )
  const totalRevenue = (
    <div>
      <span className="text-main font-bold">Total Revenue</span>
      <br />
      <span className="font-bold">{currentState?.totalRevenue ?? ''}</span>
      <span className="font-bold text-sm">usdt</span>
    </div>
  )
  return (
    <Layout
      isLogin={true}
      title="Revenue statistics"
      before="home"
      menuIndex={1}
    >
      <div className="rounded-md h-20 self-center align-middle text-center">
        <StaticCard content1={totalEarning} content2={totalRevenue} />
      </div>
      <div className="pt-8">
        <NavButton
          tabLabelOne="Daily Revenue"
          tabLabelTwo="Monthly Revenue"
          tabNumber={tabNumber}
          onChange={handleChange}
        />
      </div>
      <div className="pt-8 pb-20">
        <TableSwipeableViews
          contentOne={<RevenueTable revenueList={currentState.dailyRevenueList} />}
          contentTwo={<RevenueTable revenueList={currentState.monthlyRevenueList} />}
          contentNumber={tabNumber}
        />
      </div>
    </Layout>
  )
}
