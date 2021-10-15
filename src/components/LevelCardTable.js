import React from 'react'
import UserLevelIcon from './UserLevelIcon'
import LevelCard from './LevelCard'

export default function LevelCardTable() {
  const tmpData = new Array(16).fill(0);
  return (
    <div className="pb-28">
      {tmpData.map((item, index)=>{
        return <LevelCard key={index} startIcon={<UserLevelIcon levelNum={index + 1} alt="Star" className="w-10 text-title" iconClass="user-level-icon-small"/>} level={index + 1} />
      })}
    </div>
  )
}
