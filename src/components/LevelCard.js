import { NavigateNext } from '@mui/icons-material'
import { Card, IconButton } from '@mui/material'
import React from 'react'

export default function LevelCard({
  startIcon = '',
  level = 1,
  levelUserNum = 0,
  onClick,
}) {
  return (
    <div className="pt-4">
      <Card className="bg-white rounded-md flex justify-between items-center p-2">
        {startIcon}
        <label className="self-center">{`${level ?? 0} Level Friend`}</label>
        <div className="w-20 text-center">
          <div className="bg-light text-main rounded-xl w-auto">{levelUserNum ?? 0}</div>
        </div>
        <IconButton
          onClick={() =>
            typeof onClick === 'function'
              ? onClick(level)
              : console.log('error')
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
