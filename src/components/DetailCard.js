import { Card, CardActions } from '@mui/material'
import React from 'react'

export default function DetailCard({ startIcon = '' }) {
  return (
    <div className="pt-4">
      <Card className="bg-white rounded-md flex justify-between p-2 items-center ">
          {startIcon}
          <label className="self-center">18599</label>
          <CardActions className="bg-light text-main rounded-xl p-0">1 star</CardActions>
          <CardActions>talentlucky0816@gmail.com</CardActions>
      </Card>
    </div>
  )
}
