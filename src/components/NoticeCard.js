import { Card } from '@mui/material'
import React from 'react'

export default function NoticeCard({ text = '' }) {
  return (
      <Card className="bg-white rounded-md flex justify-between p-2">
        <div>{ text }</div>
      </Card>
  )
}
