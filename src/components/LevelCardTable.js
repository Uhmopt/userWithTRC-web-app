import React from 'react'
import CustomSvgs from './CustomSvgs'
import LevelCard from './LevelCard'

export default function LevelCardTable({}) {
  return (
    <div>
        <LevelCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
        <LevelCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
        <LevelCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
        <LevelCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
        <LevelCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
        <LevelCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
        <LevelCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
        <LevelCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
    </div>
  )
}
