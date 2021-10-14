import { Card, CardContent } from '@mui/material'
import React from 'react'

export default function StaticCard({ content1 = '', content2 = '' }) {
  const className = content2 ? 'grid grid-cols-2 divide-x divide-main' : ''
  return (
    <Card>
      <CardContent className="bg-white rounded-md shadow-md text-center">
        <div className={className}>
          {content1}
          {content2}
        </div>
      </CardContent>
    </Card>
  )
}
