import { Grid } from '@mui/material'
import React from 'react'

export default function MainTitle({
  title = '',
  isLine = true,
  isLogin = false,
}) {
  console.log( isLogin )
  return (
    <Grid container>
      <span
        className={
          isLogin
            ? 'text-base font-bold text-main mt-5'
            : 'text-3xl font-bold text-main mt-10'
        }
      >
        {title}
      </span>
      {isLine ? (
        <Grid className="w-full border-b-2 border-solid py-1 border-main"></Grid>
      ) : null}
    </Grid>
  )
}
