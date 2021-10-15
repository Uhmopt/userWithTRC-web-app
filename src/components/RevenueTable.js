import React from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'

export default function RevenueTable({ isdaily = true }) {
  const tmpData = new Array(12).fill(0)
  return (
    // <div className="mt-12 mb-24 bg-white shadow-lg rounded-md">
    <div>
      {/* <div className="flex items-center justify-between p-4 bg-main text-white font-bold rounded-t-md h-12">
        <div>Daily Revenue</div>
        <div>Monthly Revenue</div>
      </div> */}
      <div className="h-5"></div>
      {tmpData?.map((item, index) => {
        return (
				<div key={index} className="flex items-center justify-between h-12 p-4 border-b-2">
          {
						isdaily?<div>07-29</div>:<div>{index+1}</div>
					}
          <div className="flex items-center">
            66666.123456
            <ArrowCircleUpIcon className="text-main" />
          </div>
        </div>
				)
      })}
    </div>
  )
}
