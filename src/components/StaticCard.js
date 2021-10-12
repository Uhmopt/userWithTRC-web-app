import { Card } from '@mui/material'
import React from 'react'

export default function NoticeCard({ text = '' }) {
  return (
      <Card className="bg-white rounded-md flex justify-between p-2">
        <div class="grid grid-cols-2 divide-x divide-green-500">
          <div>1</div>
          <div>2</div>
        </div>
      </Card>
  )
}
