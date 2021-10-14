import React from 'react'
import CustomSvgs from 'components/CustomSvgs'

export default function Logo({ variant = '', title = '', ...props }) {
  return (
    <div>
      {variant === 'text' ? (
        <>Logo</>
      ) : variant === 'title' ? (
        <div className="flex items-center">
          <CustomSvgs name="Logo1" className="icon text-white" label="Logo1" {...props} />
          <label className="text-white text-xl pl-3">{title ?? ''}</label>
        </div>
      ) : variant === 'icon' ? (
        <CustomSvgs name="Logo" label="Logo" {...props} />
      ) : (
        <>Logo</>
      )}
    </div>
  )
}
