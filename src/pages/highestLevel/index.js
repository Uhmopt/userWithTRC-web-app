import { Button } from '@mui/material'
import StaticCard from 'components/StaticCard'
import { getMaxLevel, getLevels } from 'lib/levels'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Layout from '../../layouts'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function HighestLevel() {
  const {t} = useTranslation()
  const user = useSelector((state) => state?.auth?.user ?? {})
  const home = useSelector((state) => state?.home ?? {})
  const history = useHistory()
  useEffect(() => {
    const maxLevel = getMaxLevel(getLevels(home?.levelList))
    if (maxLevel > (user?.user_level ?? 0)) {
      history.push('/upgrade')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const upgradeUser = (
    <>
      <div className="text-title text-center">
        <div className="text-2xl py-5">
          {t('currentLevel')}: {user?.user_level ?? 0} {t('starUser')}
        </div>
        <div className="mb-8 p-3  bg-light rounded-md">
          <span>
          {t('hightLevelDscrpt')}
          </span>
        </div>
        <Link to={`invite`}>
          <Button
            type="button"
            variant="contained"
            size="large"
            fullWidth
            className="capitalize"
          >
            {t('inviteFriend')}
          </Button>
        </Link>
      </div>
    </>
  )

  return (
    <Layout
      isLogin={true}
      title={t('currentHightLevel')}
      before="payment"
      menuIndex={2}
    >
      <div className="rounded-md h-20 self-center align-middle text-center">
        <StaticCard content1={upgradeUser} />
      </div>
    </Layout>
  )
}
