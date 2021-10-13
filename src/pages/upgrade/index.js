import StaticCard from 'components/StaticCard'
import LevelAuthorityTable from 'components/LevelAuthorityTable'
import CustomSvgs from 'components/CustomSvgs'
import MainTitle from 'components/MainTitle'
import React from 'react'
import Layout from '../../layouts'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

export default function Upgrade() {
  const totalEarning = (
    <>
      <div>
        <div className="relative">
          <CustomSvgs name="Star" alt="Star" className="m-auto"/>
        </div>
        <label className="font-bold text-title">Next Level: One Star Member</label>
      </div>
    </>
  )

  return (
    <Layout isLogin={true} title="Upgrade" before="home" menuIndex = {2} >
      <div className="rounded-md h-20 mt-20 mb-36 self-center align-middle text-center">
        <div className="text-xl text-title pb-1">Current level: Registered user</div>
        <StaticCard content1={totalEarning} />
      </div>
      <div>
        <Link to={`#`}>
          <Button type="button" variant="contained" size="large" fullWidth className="capitalize">
            Upgrade Now
          </Button>
        </Link>
      </div>
      <MainTitle />
      <LevelAuthorityTable />
    </Layout>
  )
}
