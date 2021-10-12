import React from 'react'
import Layout from '../../layouts'
import Banner from 'components/Banner'
import CustomSvgs from 'components/CustomSvgs'
import MainTitle from 'components/MainTitle'
import LevelCard from 'components/LevelCard'
import { CardContent } from '@mui/material'

export default function Home() {
  const banner = (
    <Banner
      icon={<CustomSvgs name="Level1" alt="Level1" className="mx-auto w-20" />}
      id="8989"
      mail="talentlucky0816@gmail.com"
      joinTime="2021-12-12"
    />
  )

  return <Layout isLogin={true} banner={banner}>
    <div className="bg-white rounded-md h-20 self-center align-middle text-center -mt-14 shadow-md">
      <CardContent>
        <label className="text-main font-bold">
          Total Revenue
        </label>
        <br />
        <label className="font-bold text-title">
          1233333333323
        </label>
        <label className="text-sm text-title">
          usdt
        </label>
      </CardContent>
    </div>
    <MainTitle title={<div><label className="text-title">Total People:</label> 1000</div>} isLogin={true}/>
    <div className="mb-24">
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
      <LevelCard startIcon = {<CustomSvgs name="Level1" alt="Level1" className="mx-auto" />}/>
    </div>
  </Layout>
}
