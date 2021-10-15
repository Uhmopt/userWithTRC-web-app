import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import LevelAuthorityTable from 'components/LevelAuthorityTable'
import MainTitle from 'components/MainTitle'
import StaticCard from 'components/StaticCard'
import UserLevelIcon from 'components/UserLevelIcon'
import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../layouts'

export default function Upgrade() {
  const totalEarning = (
    <>
      <Box>
        <UserLevelIcon
          levelNum="1"
          alt="Star"
          className="mx-auto w-14"
          iconClass="user-level-icon-large"
        />

        <Box className="font-bold text-title flex items-center justify-center">
          <Box>Next Level: One Star Member</Box>
          <Box className="bg-yellow-300 rounded-full flex items-center ">
            <ArrowRightAltIcon
              className="text-white self-center"
              size="small"
            />
          </Box>
        </Box>
      </Box>
    </>
  )

  return (
    <Layout isLogin={true} title="Upgrade" before="home" menuIndex={2}>
      <Box className="rounded-md h-20 pb-36 self-center align-middle text-center">
        <Box className="text-xl text-title pb-1">
          Current level: Registered user
        </Box>
        <StaticCard content1={totalEarning} />
      </Box>
      <Box className="pt-12">
        <Link to={`payment`}>
          <Button type="button" variant="contained" size="large" fullWidth>
            Upgrade Now
          </Button>
        </Link>
      </Box>
      <MainTitle className="pt-8" />
      <LevelAuthorityTable />
    </Layout>
  )
}
