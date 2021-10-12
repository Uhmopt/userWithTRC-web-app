import { NavigateNext } from '@mui/icons-material'
import { Card, CardActions } from '@mui/material'
import React from 'react'

export default function LevelCard({ startIcon = '' }) {
  return (
    <div className="pt-4">
      <Card className="bg-white rounded-md flex justify-between p-2">
          {startIcon}
          <label className="self-center">First Level Friend</label>
          <CardActions className="bg-light text-main rounded-xl p-1">1000000</CardActions>
          <CardActions className="bg-light text-main rounded-full p-1 self-center shadow-sm"><NavigateNext /></CardActions>
      </Card>
    </div>
  )
}
