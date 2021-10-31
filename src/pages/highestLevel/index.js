import { Button } from '@mui/material'
import StaticCard from 'components/StaticCard'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Layout from '../../layouts'

export default function HighestLevel() {
  const user = useSelector((state) => state?.auth?.user ?? {})
  const upgradeUser = (
    <>
      <div className="text-title text-center">
        <div className="text-2xl py-5">Current Lavel: {user?.user_level ?? 0} Star user</div>
        <div className="mb-8 p-3  bg-light rounded-md">
         <span>Congratulations, You have reached the hightest level so far</span>
        </div>
        <Link to={`invite`}>
          <Button
            type="button"
            variant="contained"
            size="large"
            fullWidth
            className="capitalize"
          >
            Invite Friend
          </Button>
        </Link>
      </div>
    </>
  )

  return (
    <Layout
      isLogin={true}
      title="Current Highest Level"
      before="payment"
      menuIndex={2}
    >
      <div className="rounded-md h-20 self-center align-middle text-center">
        <StaticCard content1={upgradeUser} />
      </div>
    </Layout>
  )
}
