import { NavigateNext } from '@mui/icons-material'
import { Card, CardActions, IconButton } from '@mui/material'
import React from 'react'

export default function LevelCard({
  startIcon = '',
  level = 0,
  levelUserNum = 0,
  onClick,
}) {
  return (
    <div className="pt-4">
      <Card className="bg-white rounded-md flex justify-between items-center p-2">
        {startIcon}
        <label className="self-center">{`${level ?? 0} Level Friend`}</label>
        <CardActions className="bg-light text-main rounded-xl">
          {levelUserNum ?? 0}
        </CardActions>
        <IconButton
          onClick={() =>
            typeof onClick === 'function' ? onClick(level) : console.log('error')
          }
          color="primary"
          className="bg-light shadow-md"
        >
          <NavigateNext />
        </IconButton>
      </Card>
    </div>
  )
}
