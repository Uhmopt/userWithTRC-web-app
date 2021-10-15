import { Card, CardActions } from '@mui/material'
import React from 'react'

export default function LevelDetailCard({ startIcon = '' }) {
  return (
    <div className="pt-4">
      <Card className="bg-white rounded-md flex justify-between p-2 items-center ">
          {startIcon}
          <label className="self-center text-ttitle">18599</label>
          <CardActions className="text-main">talentlucky0816@gmail.com</CardActions>
      </Card>
    </div>
  )
}
