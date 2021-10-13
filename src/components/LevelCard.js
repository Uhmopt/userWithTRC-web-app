import { NavigateNext } from '@mui/icons-material'
import { Card, CardActions } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function LevelCard({ startIcon = '' }) {
  return (
    <div className="pt-4">
      <Card className="bg-white rounded-md flex justify-between p-2">
        {startIcon}
        <label className="self-center">First Level Friend</label>
        <CardActions className="bg-light text-main rounded-xl">
          1000000
        </CardActions>
        <Link to="level-users">
          <CardActions className="bg-light text-main rounded-full self-center shadow-sm">
            <NavigateNext />
          </CardActions>
        </Link>
      </Card>
    </div>
  )
}
