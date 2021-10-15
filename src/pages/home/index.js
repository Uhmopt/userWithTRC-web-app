import React from 'react'
import Layout from '../../layouts'
import Banner from 'components/Banner'
import CustomSvgs from 'components/CustomSvgs'
// import UserLevelIcon from 'components/UserLevelIcon'
import StaticCard from 'components/StaticCard'
import MainTitle from 'components/MainTitle'
import { Box } from '@mui/system'
import LevelCardTable from 'components/LevelCardTable'

export default function Home() {
  const banner = (
    <Banner
      icon={<CustomSvgs name="Level1" alt="Level1" className="mx-auto w-15" />}
      upperIcon={<CustomSvgs name="Star" alt="Star" className="mx-auto w-15" />}
      id="8989"
      mail="talentlucky0816@gmail.com"
      joinTime="2021-12-12"
    />
  )
  const totalContent = (
    <>
      <div>
        <label className="text-main font-bold">Total Revenue</label>
        <br />
        <label className="font-bold text-title">1233333333323</label>
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
            <span className="text-title">Total People:</span>
            <span>1000</span>
          </div>
        }
        isLogin={true}
        className="py-8"
      />
      <LevelCardTable />
    </Layout>
  )
}
