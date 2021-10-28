import React from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import { Box } from '@mui/system'

export default function RevenueTable({ revenueList = [] }) {
  return (
    <Box className="rounded-md bg-white">
      {(revenueList ?? []).length > 0 && <div className="h-5"> </div>}
      <div className="bg-white">
        {(revenueList ?? []).map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between h-12 p-4 border-b-2"
            >
              <span>{item?.pay_date ?? ''}</span>
              <span className="flex items-center">
                {item?.pay_amount ?? ''}
                <ArrowCircleUpIcon className="text-main" />
              </span>
            </div>
          )
        })}
      </div>
    </Box>
  )
}
