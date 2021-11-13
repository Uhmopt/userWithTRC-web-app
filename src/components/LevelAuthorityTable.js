import React from 'react'
import { useTranslation } from 'react-i18next'
import LevelAuthorityCard from './LevelAuthorityCard'
import UserLevelIcon from './UserLevelIcon'

export default function LevelAuthorityTable({ userLevel=0, levelList = [] }) {
  const {t} = useTranslation()
  return (
    <div className="mt-6 mb-24">
      <label className="text-title text-lg">{t('levelAuthority')}</label>
      {levelList.map((item, index) => {
        return (
          <LevelAuthorityCard
            userLevel={userLevel}
            key={index}
            startIcon={
              <UserLevelIcon
                levelNum={item?.level_degree ?? 0}
                alt="Star"
                className="mx-auto w-10"
                iconClass="user-level-icon-small"
              />
            }
            levelNum = {item?.level_degree ?? 0}
          />
        )
      })}
    </div>
  )
}
