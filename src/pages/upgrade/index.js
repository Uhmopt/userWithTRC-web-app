import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import LevelAuthorityTable from 'components/LevelAuthorityTable'
import MainTitle from 'components/MainTitle'
import StaticCard from 'components/StaticCard'
import UserLevelIcon from 'components/UserLevelIcon'
import { getMaxLevel, getLevels } from 'lib/levels'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Layout from '../../layouts'

export default function Upgrade() {
  const { t } = useTranslation()
  const user = useSelector((state) => state?.auth?.user ?? {})
  const history = useHistory()
  const [levelList, setLevelList] = useState([])
  const [upgradeNum, setUpgradeNum] = useState(0)
  const levels = useSelector((state) => state?.home?.levelList ?? [])

  const levelOrder = (numbre = 0) => {
    switch (Number(numbre)) {
      case 0:
        return t('Registered')
      case 1:
        return t('First')
      case 2:
        return t('Second')
      case 3:
        return t('Third')
      case 4:
        return t('Fourth')
      case 5:
        return t('Fifth')
      case 6:
        return t('Sixth')
      case 7:
        return t('Seventh')
      case 8:
        return t('Eighth')
      case 9:
        return t('Ninth')
      case 10:
        return t('Tenth')
      case 11:
        return t('Eleventh')
      case 12:
        return t('Twelfth')
      case 13:
        return t('Thirteenth')
      case 14:
        return t('Fourteenth')
      case 15:
        return t('Fifteenth')
      case 16:
        return t('Sixteenth')
      case 17:
        return t('Seventeenth')
      case 18:
        return t('Eighteenth')
      case 19:
        return t('Nineteenth')
      case 20:
        return t('Twentieth')
      default:
        return t('Registered')
    }
  }

  useEffect(() => {
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const init = () => {
    const tmpLevelList = getLevels(levels)
    setLevelList(tmpLevelList ?? [])
    let tmpNum = Number(user?.user_level ?? 0) + 1
    if (tmpNum > getMaxLevel(tmpLevelList)) {
      tmpNum = getMaxLevel(tmpLevelList)
    }
    setUpgradeNum(tmpNum)
  }

  const handleClick = () => {
    history.push('/payment')
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
            {t('nextLevel')}: {levelOrder(upgradeNum)} {t('starMember')}
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
    <Layout isLogin={true} title={t('upgrade')} before="home" menuIndex={2}>
      <Box className="rounded-md h-20 pb-36 self-center align-middle text-center">
        <Box className="text-xl text-title pb-1">
          <span>
            {t('currentLevel')}:{' '}
            <font className="text-main font-bold">
              {levelOrder(user?.user_level ?? 0)} {t('level')}
            </font>{' '}
            {t('user')}
          </span>
        </Box>
        <StaticCard content1={topicContent} />
      </Box>
      <Box className="pt-12">
        <Button
          onClick={handleClick}
          type="button"
          variant="contained"
          size="large"
          fullWidth
        >
          {t('upgradeNow')}
        </Button>
      </Box>
      <MainTitle className="pt-8" />
      <LevelAuthorityTable
        levelList={levelList}
        userLevel={Number(user?.user_level ?? 0)}
      />
    </Layout>
  )
}
