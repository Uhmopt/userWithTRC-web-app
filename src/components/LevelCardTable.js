import React from 'react'
import UserLevelIcon from './UserLevelIcon'
import LevelCard from './LevelCard'

export default function LevelCardTable({ levelList = [], onClick }) {
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
              (level ?? []).length
            }
            level={index + 1}
            onClick={onClick}
          />
        ) : null
      })}
    </div>
  )
}
