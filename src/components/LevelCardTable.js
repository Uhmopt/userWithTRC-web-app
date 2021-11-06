import React from 'react'
import UserLevelIcon from './UserLevelIcon'
import LevelCard from './LevelCard'

export default function LevelCardTable({ levelList = [], onClick }) {
  console.log(levelList)
  return (
    <div className="pb-28">
      {levelList.map((level = [], index) => {
        return level?.length ?? 0 ? (
          <LevelCard
            key={index}
            startIcon={
              <UserLevelIcon
                levelNum={index + 1}
                alt="Star"
                className="w-10 text-title"
                iconClass="user-level-icon-small"
              />
            }
            levelUserNum={
              (level ?? []).filter((x) => x.user_level >= index + 1).length
            }
            level={index + 1}
            onClick={onClick}
          />
        ) : null
      })}
    </div>
  )
}
