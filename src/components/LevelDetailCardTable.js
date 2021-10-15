import React from 'react'
import LevelDetailCard from './LevelDetailCard'
import UserLevelIcon from './UserLevelIcon'

export default function LevelDetailCardTable({ startIcon = '' }) {
  return (
    <div>
      <LevelDetailCard
        startIcon={
          <UserLevelIcon
            levelNum="2"
            alt="Star"
            className="mx-auto w-10"
            iconClass="user-level-icon-small"
          />
        }
      />
      <LevelDetailCard
        startIcon={
          <UserLevelIcon
            levelNum="2"
            alt="Star"
            className="mx-auto w-10"
            iconClass="user-level-icon-small"
          />
        }
      />
      <LevelDetailCard
        startIcon={
          <UserLevelIcon
            levelNum="2"
            alt="Star"
            className="mx-auto w-10"
            iconClass="user-level-icon-small"
          />
        }
      />
      <LevelDetailCard
        startIcon={
          <UserLevelIcon
            levelNum="2"
            alt="Star"
            className="mx-auto w-10"
            iconClass="user-level-icon-small"
          />
        }
      />
      <LevelDetailCard
        startIcon={
          <UserLevelIcon
            levelNum="2"
            alt="Star"
            className="mx-auto w-10"
            iconClass="user-level-icon-small"
          />
        }
      />
    </div>
  )
}
