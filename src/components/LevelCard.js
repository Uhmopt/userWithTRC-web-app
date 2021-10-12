import { NavigateNext } from '@mui/icons-material'
import { Card } from '@mui/material'
import React from 'react'

export default function LevelCard({ startIcon = '' }) {
  return (
    <div className="pt-4">
      <Card className="bg-white rounded-md flex justify-between p-2">
          {startIcon}
          <label>First Level Friend</label>
          <div className="bg-light text-main rounded-xl">1000000</div>
          <div className="bg-light text-main rounded-xl py-0 self-center"><NavigateNext /></div>
      </Card>
    </div>
  )
}
