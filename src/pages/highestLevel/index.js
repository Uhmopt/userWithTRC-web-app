import { Button } from '@mui/material'
import CustomInput from 'components/CustomInput'
import LevelAuthorityTable from 'components/LevelAuthorityTable'
import MainTitle from 'components/MainTitle'
import StaticCard from 'components/StaticCard'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../layouts'

export default function HighestLevel() {
  const [currentState, setCurrentState] = useState({
    invite: ''
  })
  const onChange = (e) => {
    setCurrentState({
      ...currentState,
      [e.target.name]: e.target.value,
    })
  }
  const upgradeUser = (
    <>
      <div className="text-title text-center">
        <div className="text-2xl py-5">Current Lavel: 10 Star user</div>
        <div className="pb-8">
          <CustomInput
            name="invite"
            placeholder="Congratulations, You have reached the hightest level so far"
            value={currentState.invite}
            onChange={onChange}
          />
        </div>
        <Link to={`#`}>
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
        <div className="py-6"></div>
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
      <div className="rounded-md h-20 mt-20 mb-36 self-center align-middle text-center">
        <StaticCard content1={upgradeUser} />
      </div>
    </Layout>
  )
}
