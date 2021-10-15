import React from 'react'
import LevelAuthorityCard from './LevelAuthorityCard'
import UserLevelIcon from './UserLevelIcon'

export default function LevelAuthorityTable() {
  return (
    <div className="mt-6 mb-24">
      <label className="text-title text-lg">Level Authority</label>
      <LevelAuthorityCard
        startIcon={
          <UserLevelIcon
            levelNum="0"
            alt="Star"
            className="mx-auto w-10"
            iconClass="user-level-icon-small"
          />
        }
      />
      <LevelAuthorityCard
        startIcon={
          <UserLevelIcon
            levelNum="0"
            alt="Star"
            className="mx-auto w-10"
            iconClass="user-level-icon-small"
          />
        }
      />
      <LevelAuthorityCard
        startIcon={
          <UserLevelIcon
            levelNum="0"
            alt="Star"
            className="mx-auto w-10"
            iconClass="user-level-icon-small"
          />
        }
      />
      <LevelAuthorityCard
        startIcon={
          <UserLevelIcon
            levelNum="0"
            alt="Star"
            className="mx-auto w-10"
            iconClass="user-level-icon-small"
          />
        }
      />
    </div>
  )
}
