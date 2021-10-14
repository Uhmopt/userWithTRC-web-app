import React from 'react'

export default function MainTitle({
  title = '',
  isLine = true,
  isLogin = false,
  ...props
}) {
  return (
    <div {...props}>
      <span
        className={
          isLogin
            ? 'text-base font-bold text-main pt-5'
            : 'text-3xl font-bold text-main pt-10'
        }
      >
        {title}
      </span>
      {isLine ? (
        <div className="w-full border-b-2 border-solid py-1 border-main"></div>
      ) : null}
    </div>
  )
}
