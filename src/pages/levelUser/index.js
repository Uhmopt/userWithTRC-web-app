import React from 'react'
import Layout from '../../layouts'
import CustomSvgs from 'components/CustomSvgs'
import StaticCard from 'components/StaticCard'
import MainTitle from 'components/MainTitle'
import DetailCard from 'components/DetailCard'
import NavButton from 'components/NavButton'
import { IconButton, Input } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export default function LevelUser() {
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
      <div className="rounded-md h-20 mt-12 self-center align-middle text-center">
        <StaticCard content1={totalUser} content2={upgraded} />
      </div>
      <NavButton />
      <div className="flex mt-8 w-full">
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
      <MainTitle isLogin={true} />
      <div className="mb-24">
        <DetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
        <DetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
        <DetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
        <DetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
        <DetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
        <DetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
        <DetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
        <DetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
        <DetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
        <DetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
        <DetailCard startIcon={<CustomSvgs name="Level1" alt="Level1" />} />
      </div>
    </Layout>
  )
}
