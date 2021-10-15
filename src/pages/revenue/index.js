import StaticCard from 'components/StaticCard'
import React from 'react'
import Layout from '../../layouts'
import NavButtonTable from 'components/NavButtonTable'

export default function Revenue() {
  const totalEarning = (
    <>
      <div>
        <label className=" text-main font-bold">Total Earning</label>
        <br />
        <label className="font-bold">2156584652465</label>
        <label className="font-bold text-sm">usdt</label>
      </div>
    </>
  )
  const totalRevenue = (
    <>
      <div>
        <label className="text-main font-bold">Total Revenue</label>
        <br />
        <label className="font-bold">100</label>
        <label className="font-bold text-sm">usdt</label>
      </div>
    </>
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
      <div className="pb-28">
        <NavButtonTable />
      </div>
    </Layout>
  )
}
