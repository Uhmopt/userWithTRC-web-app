import React from 'react'

export default function Logo({ variant = '' }) {
  return <div>{variant === 'text' ? <>Logo</> : <>Logo</>}</div>
}
