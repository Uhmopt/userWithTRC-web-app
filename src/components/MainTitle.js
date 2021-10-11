import React from 'react'
import FlagSelect from 'components/FlagSelect'

export default function MainTitle({
  title = '',
  isLine = true,
  isSelectLang = false,
}) {
  return (
    <div>
      <div className="flex justify-between">
        <div className="text-3xl font-bold text-main mt-10">{title}</div>
          {
            isSelectLang?(<div className=" mt-10"><FlagSelect className='pt-5'/></div>):null
          }
      </div>
      {
        isLine?(<div className="w-full border-b-2 border-solid py-2 border-main"></div>):null
      }
    </div>
  )
}
