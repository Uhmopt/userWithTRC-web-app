import SearchIcon from '@mui/icons-material/Search'
import { IconButton, Input } from '@mui/material'
import LevelDetailCardTable from 'components/LevelDetailCardTable'
import MainTitle from 'components/MainTitle'
import NavButton from 'components/NavButton'
import StaticCard from 'components/StaticCard'
import TableSwipeableViews from 'components/TableSwipeableViews'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Layout from '../../layouts'

export default function LevelUsers(props) {
  const [tabNumber, setTabNumber] = useState(0)
  const level = props?.location?.state ?? 0
  useEffect(() => {
    console.log(level)
  }, [])
  const handleChange = (param) => {
    setTabNumber(param)
  }
  const totalUser = (
    <>
      <div>
        <label className="text-title font-bold">Total User</label>
        <br />
        <label className="font-bold text-main">1100</label>
      </div>
    </>
  )
  const upgraded = (
    <>
      <div>
        <label className="text-title font-bold">Upgraded</label>
        <br />
        <label className="font-bold text-main">100</label>
      </div>
    </>
  )
  return (
    <Layout isLogin={true} title={'First Level User'} before={'home'}>
      <div className="rounded-md h-20 self-center align-middle text-center">
        <StaticCard content1={totalUser} content2={upgraded} />
      </div>
      <div className="pt-8">
        <NavButton
          tabLabelOne="All Users"
          tabLabelTwo="Upgraded"
          tabNumber={tabNumber}
          onChange={handleChange}
        />
      </div>
      <div className="flex pt-8 w-full">
        <Input
          fullWidth
          disableUnderline
          placeholder="Please enter ID/Email"
          className="bg-white rounded-md h-10 p-2 mr-2"
        ></Input>
        <IconButton className="bg-white shadow-md">
          <SearchIcon />
        </IconButton>
      </div>
      <MainTitle isLogin={true} className="py-8" />
      <div className="mb-24">
        <TableSwipeableViews
          contentOne={<LevelDetailCardTable />}
          contentTwo={<LevelDetailCardTable />}
          contentNumber={tabNumber}
        />
      </div>
    </Layout>
  )
}
