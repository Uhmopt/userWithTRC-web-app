import React from 'react'
import Layout from '../../layouts'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import StaticCard from 'components/StaticCard'
import LevelAuthorityTable from 'components/LevelAuthorityTable'
import CustomSvgs from 'components/CustomSvgs'
import CustomInput from 'components/CustomInput'
import MainTitle from 'components/MainTitle'
import { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

export default function Payment() {
  const [currentState, setCurrentState] = useState({
    email: '',
    verifyCode: '',
    id: '',
    theme: '',
    contact: '',
  })
  const onChange = (e) => {
    setCurrentState({
      ...currentState,
      [e.target.name]: e.target.value,
    })
  }
  const upgradeUser = (
    <>
      <div className="text-title text-left">
        <div className="flex items-center">
          <div className="relative">
            <CustomSvgs name="Star" alt="Star" className="m-auto" />
          </div>
          <div className="text-2xl">Upgrade V1 user</div>
        </div>
        <div>
          Please transfer 100.001234 usdt (trc20) to the following wallet.
        </div>
        <div>USDT Amount: 100.001234</div>
        <div>
          Wallet address :{' '}
          <label className="text-main">
            TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjlj6t
          </label>{' '}
        </div>
        <div className="text-warnning text-sm">
          Warning : Please pay 100.001234 usdt strictly, otherwise it cannot be
          upgraded automatically.{' '}
        </div>
        <div className="flex items-center text-title">
          <div>Hash:</div>
          <div className="w-full">
            <CustomInput
              name="hash"
							endIcon={<ContentCopyIcon className="text-main" />}
              value={currentState.hash}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </>
  )

  return (
    <Layout isLogin={true} title="Payment" before="upgrade" menuIndex={2}>
      <div className="rounded-md h-20 mt-20 mb-36 self-center align-middle text-center">
        <StaticCard content1={upgradeUser} />
      </div>
      <div className="py-10"></div>
      <div>
        <Link to={`#`}>
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
      </div>
      <MainTitle />
      <LevelAuthorityTable />
    </Layout>
  )
}
