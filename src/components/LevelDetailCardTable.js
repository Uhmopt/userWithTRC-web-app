import React from 'react'
import CustomSvgs from './CustomSvgs'
import LevelDetailCard from './LevelDetailCard'

export default function LevelDetailCardTable({ startIcon = '' }) {
  return (
    <div>
      <LevelDetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
      <LevelDetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
      <LevelDetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
      <LevelDetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
      <LevelDetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
      <LevelDetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
      <LevelDetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
      <LevelDetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
      <LevelDetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
      <LevelDetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
      <LevelDetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
    </div>
  )
}
