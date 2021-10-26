import { Grid } from '@mui/material'
import React from 'react'

export default function LevelDetailCard({
  startIcon = '',
  rid = '',
  email = '',
}) {
  return (
    <div className="pt-4">
      <Grid
        container
        className="bg-white rounded-md flex justify-between p-2 items-center"
      >
        <Grid item xs={2}>
          {startIcon}
        </Grid>
        <Grid item xs={2}>
          <label className="self-center text-title">{rid}</label>
        </Grid>
        <Grid item xs={8} className="text-main text-right">
          {email}
        </Grid>
      </Grid>
    </div>
  )
}
