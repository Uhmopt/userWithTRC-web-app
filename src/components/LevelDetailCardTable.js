import React from 'react'
import LevelDetailCard from './LevelDetailCard'
import UserLevelIcon from './UserLevelIcon'

export default function LevelDetailCardTable({ levelUsers = [] }) {
  return (
    <div>
      {(levelUsers ?? []).map((levelUser, index) => {
        return (
          <LevelDetailCard
            key={index}
            startIcon={
              <UserLevelIcon
                levelNum={levelUser?.user_level ?? 0}
                alt="Star"
                className="mx-auto w-10"
                iconClass="user-level-icon-small"
              />
            }
            rid={levelUser?.user_rid ?? 0}
            email={levelUser?.user_email ?? 0}
          />
        )
      })}
    </div>
  )
}
