import React from 'react'
import LevelAuthorityCard from './LevelAuthorityCard'
import CustomSvgs from './CustomSvgs'

export default function LevelAuthorityTable() {
  return (
    <div className="mt-6 mb-24">
      <label className="text-title text-lg">Level Authority</label>
      <LevelAuthorityCard startIcon={<CustomSvgs name="Star" alt="Star" className="w-10" />} />
      <LevelAuthorityCard startIcon={<CustomSvgs name="Star" alt="Star" className="w-10" />} />
      <LevelAuthorityCard startIcon={<CustomSvgs name="Star" alt="Star" className="w-10" />} />
      <LevelAuthorityCard startIcon={<CustomSvgs name="Star" alt="Star" className="w-10" />} />
      <LevelAuthorityCard startIcon={<CustomSvgs name="Star" alt="Star" className="w-10" />} />
      <LevelAuthorityCard startIcon={<CustomSvgs name="Star" alt="Star" className="w-10" />} />
    </div>
  )
}
