import React from 'react'
import LevelAuthorityCard from './LevelAuthorityCard'
import UserLevelIcon from './UserLevelIcon'

export default function LevelAuthorityTable() {
  const tmpData = new Array(16).fill(0)
  return (
    <div className="mt-6 mb-24">
      <label className="text-title text-lg">Level Authority</label>
      {tmpData.map((item, index) => {
        return (
          <LevelAuthorityCard
            key={index}
            startIcon={
              <UserLevelIcon
                levelNum={index}
                alt="Star"
                className="mx-auto w-10"
                iconClass="user-level-icon-small"
              />
            }
            levelNum = {index}
          />
        )
      })}
    </div>
  )
}
