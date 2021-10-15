import React from 'react'
import Layout from '../../layouts'
import { Link } from 'react-router-dom'
import { Button, IconButton } from '@mui/material'
import StaticCard from 'components/StaticCard'
import LevelAuthorityTable from 'components/LevelAuthorityTable'
import CustomSvgs from 'components/CustomSvgs'
import CustomInput from 'components/CustomInput'
import MainTitle from 'components/MainTitle'
import { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Box } from '@mui/system'
import UserLevelIcon from 'components/UserLevelIcon'

export default function Payment() {
  const [currentState, setCurrentState] = useState({
    hash: '',
  })
  const handleChange = (e) => {
    setCurrentState({
      ...currentState,
      [e.target.name]: e.target.value,
    })
  }
  const upgradeUser = (
    <>
      <div className="text-title text-left text-sm">
        <div className="flex items-center">
          <div className="relative">
            <UserLevelIcon
              levelNum="1"
              alt="Star"
              className=" w-14 inline-block"
              iconClass="user-level-icon-large"
            />
          </div>
          <span className="text-2xl">Upgrade V1 user</span>
        </div>
        <div>
          <span>Please transfer</span>{' '}
          <span className="text-main">100.001234</span>{' '}
          <span>usdt (trc20) to the following wallet.</span>
        </div>
        <div className="pt-3">
          <span className="font-bold">USDT Amount:</span>{' '}
          <span className="text-main">100.001234</span>
        </div>
        <div className="items-center sm:flex pt-3">
          <span className="font-bold">Wallet address :</span>
          <div className="text-main m-3">
            <span>TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjlj6t</span>
            <IconButton>
              <ContentCopyIcon className="text-main" />
            </IconButton>
          </div>
        </div>
        <div className="text-warnning text-sm pb-3">
          <span className="font-bold">Warning :</span>
          <span>
            {' '}
            Please pay 100.001234 usdt strictly, otherwise it cannot be upgraded
            automatically.
          </span>
        </div>
        <div className="flex items-center text-title pt-3">
          <span>Hash:</span>
          <div className="w-full ml-3">
            <CustomInput
              name="hash"
              value={currentState.hash}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  )

  return (
    <Layout isLogin={true} title="Payment" before="upgrade" menuIndex={2}>
      <Box className="rounded-md h-20 self-center align-middle text-center">
        <StaticCard content1={upgradeUser} />
      </Box>
      <Box className="pt-80"></Box>
      <Box>
        <Link to={`highest-level`}>
          <Button
            type="button"
            variant="contained"
            size="large"
            fullWidth
            className="capitalize"
          >
            Submit
          </Button>
        </Link>
        <MainTitle className="pt-8" />
      </Box>
      <LevelAuthorityTable />
    </Layout>
  )
}
