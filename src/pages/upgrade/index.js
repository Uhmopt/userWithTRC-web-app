import React from 'react'
import Layout from '../../layouts'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import StaticCard from 'components/StaticCard'
import LevelAuthorityTable from 'components/LevelAuthorityTable'
import CustomSvgs from 'components/CustomSvgs'
import MainTitle from 'components/MainTitle'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

export default function Upgrade() {
  const totalEarning = (
    <>
      <div>
        <div className="relative">
          <CustomSvgs name="Star" alt="Star" className="m-auto" />
        </div>
        <div className="font-bold text-title flex items-center justify-center">
          <div>Next Level: One Star Member</div>
          <div className="bg-yellow-300 rounded-full flex items-center ">
            <ArrowRightAltIcon
              className="text-white self-center"
              size="small"
            />
          </div>
        </div>
      </div>
    </>
  )

  return (
    <Layout isLogin={true} title="Upgrade" before="home" menuIndex={2}>
      <div className="rounded-md h-20 mt-20 mb-36 self-center align-middle text-center">
        <div className="text-xl text-title pb-1">
          Current level: Registered user
        </div>
        <StaticCard content1={totalEarning} />
      </div>
      <div>
        <Link to={`payment`}>
          <Button type="button" variant="contained" size="large" fullWidth >
            Upgrade Now
          </Button>
        </Link>
      </div>
      <MainTitle />
      <LevelAuthorityTable />
    </Layout>
  )
}
