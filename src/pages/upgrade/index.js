import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import LevelAuthorityTable from 'components/LevelAuthorityTable'
import MainTitle from 'components/MainTitle'
import StaticCard from 'components/StaticCard'
import UserLevelIcon from 'components/UserLevelIcon'
import {levelOrder, getMaxLevel, getLevels} from 'lib/levels'
import notification from 'lib/notification'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Layout from '../../layouts'

export default function Upgrade() {
  const user = useSelector((state) => state?.auth?.user ?? {})
  const history = useHistory()
  const [levelList, setLevelList] = useState([])
  const [upgradeNum, setUpgradeNum] = useState(0)
  const LevelList = useSelector((state) => state?.home?.levelList ?? [])

  useEffect(() => {
    init()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const init = () => {
    const tmpLevelList = getLevels(LevelList)
    setLevelList(tmpLevelList ?? []);
    let tmpNum = Number(user?.user_level ?? 0) + 1
    if (tmpNum > getMaxLevel( LevelList )) {
      tmpNum = getMaxLevel( LevelList );
    }
    setUpgradeNum( tmpNum )
  }

  const handleClick = () => {
    if (upgradeNum === levelList?.length) {
      notification('success', 'You are reached at the last level.')
      return false;
    }
    history.push('/payment');
  }

  const topicContent = (
    <>
      <Box>
        <UserLevelIcon
          levelNum={upgradeNum}
          alt="Star"
          className="mx-auto w-14"
          iconClass="user-level-icon-large"
        />

        <Box className="font-bold text-title flex items-center justify-center">
          <Box>
            Next Level: {levelOrder(upgradeNum)} Star
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
        <Button onClick={handleClick} type="button" variant="contained" size="large" fullWidth>
          Upgrade Now
        </Button>
      </Box>
      <MainTitle className="pt-8" />
      <LevelAuthorityTable levelList={levelList} userLevel={Number(user?.user_level ?? 0)} />
    </Layout>
  )
}
