import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import LevelAuthorityTable from 'components/LevelAuthorityTable'
import MainTitle from 'components/MainTitle'
import StaticCard from 'components/StaticCard'
import UserLevelIcon from 'components/UserLevelIcon'
import React from 'react'
import { Link } from 'react-router-dom'
import levelOrder from 'lib/levelOrder'
import Layout from '../../layouts'
import { useSelector } from 'react-redux'

export default function Upgrade() {
  const user = useSelector((state) => state?.auth?.user ?? {})
  const topicContent = (
    <>
      <Box>
        <UserLevelIcon
          levelNum={Number(user?.user_level ?? 0) + 1}
          alt="Star"
          className="mx-auto w-14"
          iconClass="user-level-icon-large"
        />

        <Box className="font-bold text-title flex items-center justify-center">
          <Box>
            Next Level: {levelOrder(Number(user?.user_level ?? 0) + 1)} Star
            Member
          </Box>
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
          <span>
            Current level:{' '}
            <font className="text-main font-bold">
              {levelOrder(user?.user_level ?? 0)} level
            </font>{' '}
            user
          </span>
        </Box>
        <StaticCard content1={topicContent} />
      </Box>
      <Box className="pt-12">
        <Link to={`payment`}>
          <Button type="button" variant="contained" size="large" fullWidth>
            Upgrade Now
          </Button>
        </Link>
      </Box>
      <MainTitle className="pt-8" />
      <LevelAuthorityTable userLevel={Number(user?.user_level ?? 0)} />
    </Layout>
  )
}
