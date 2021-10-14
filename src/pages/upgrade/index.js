import React from 'react'
import Layout from '../../layouts'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import StaticCard from 'components/StaticCard'
import LevelAuthorityTable from 'components/LevelAuthorityTable'
import CustomSvgs from 'components/CustomSvgs'
import MainTitle from 'components/MainTitle'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Box } from '@mui/system'

export default function Upgrade() {
  const totalEarning = (
    <>
      <Box>
        <Box className="relative">
          <CustomSvgs name="Star" alt="Star" className="m-auto" />
        </Box>
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
      <MainTitle className="pt-8"/>
      <LevelAuthorityTable />
    </Layout>
  )
}
