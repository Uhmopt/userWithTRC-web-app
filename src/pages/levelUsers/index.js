/* eslint-disable react-hooks/exhaustive-deps */
import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'
import CustomInput from 'components/CustomInput'
import LevelDetailCardTable from 'components/LevelDetailCardTable'
import MainTitle from 'components/MainTitle'
import NavButton from 'components/NavButton'
import StaticCard from 'components/StaticCard'
import TableSwipeableViews from 'components/TableSwipeableViews'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../layouts'
import {levelOrder} from 'lib/levels'
import { getFriendArray } from 'services/user.service'

const defaultState = {
  tabNumber: 0,
  usersByLevel: [],
  allUsersByLevel: [],
  searItem: '',
}
export default function LevelUsers(props) {
  const home = useSelector((state) => state?.home ?? {})
  const user = useSelector((state) => state?.auth?.user ?? {})
  const [currentState, setCurrentState] = useState(defaultState)

  // Note: Get state from HomePage
  const level = props?.location?.state ?? 1

  useEffect(() => {
    const userListByLevelFriend = getFriendArray( user?.user_id ?? -1, home?.userList ?? [] )
    // Note: Filter All users and Upgraded users
    const tempAllUsers = userListByLevelFriend.length > 0 ? userListByLevelFriend[ level - 1 ] : []
    const tempUsers = tempAllUsers.filter((item) => {
      return item?.user_level >= level
    })
    handleChange({ usersByLevel: tempUsers, allUsersByLevel: tempAllUsers })
  }, [])

  const handleChange = (param = {}) => {
    setCurrentState((prevState = defaultState) => ({
      ...(prevState ?? defaultState),
      ...param,
    }))
  }
  // Note: Handle Search click event
  const handleSearch = (e) => {
    setCurrentState((prevState = {}) => ({
      ...(prevState ?? {}),
      [e.target.name]: e.target.value,
    }))
  }
  // Note: Handle tab click event
  const handleTabChange = (param) => {
    setCurrentState((prevState = defaultState) => ({
      ...(prevState ?? defaultState),
      tabNumber: param,
    }))
  }
  // Note: Get attacged users by searchitem
  const getSearchItem = (allItems = []) => {
    const tmpData = []
    ;(allItems ?? []).forEach((element) => {
      if (
        (element?.user_rid ?? '')
          .toString()
          .includes(currentState?.searItem ?? '') ||
        (element?.user_email ?? '').includes(currentState?.searItem ?? '')
      ) {
        tmpData.push(element)
      }
    })
    return tmpData
  }
  const totalUser = (
    <>
      <div>
        <label className="text-title font-bold">Total User</label>
        <br />
        <label className="font-bold text-main">
          {currentState?.allUsersByLevel?.length ?? 0}
        </label>
      </div>
    </>
  )
  const upgraded = (
    <>
      <div>
        <label className="text-title font-bold">Upgraded</label>
        <br />
        <label className="font-bold text-main">
          {currentState?.usersByLevel?.length ?? 0}
        </label>
      </div>
    </>
  )
  return (
    <Layout isLogin={true} title={`${levelOrder(level)} Level User`} before={'home'}>
      <div className="rounded-md h-20 self-center align-middle text-center">
        <StaticCard content1={totalUser} content2={upgraded} />
      </div>
      <div className="pt-8">
        <NavButton
          tabLabelOne="All Users"
          tabLabelTwo="Upgraded"
          tabNumber={currentState.tabNumber}
          onChange={handleTabChange}
        />
      </div>
      <div className="flex pt-8 w-full">
        <CustomInput
          name="searItem"
          value={currentState.searItem}
          endIcon={
            <IconButton onClick={console.log()} className="shadow-sm">
              <SearchIcon className="text-main" />
            </IconButton>
          }
          className="bg-white"
          placeholder="Please enter ID/Email"
          onChange={handleSearch}
        />
      </div>

      <MainTitle isLogin={true} className="py-8" />
      <div className="mb-24">
        <TableSwipeableViews
          contentOne={
            <LevelDetailCardTable
              levelUsers={getSearchItem(currentState?.allUsersByLevel ?? [])}
            />
          }
          contentTwo={
            <LevelDetailCardTable
              levelUsers={getSearchItem(currentState?.usersByLevel ?? [])}
            />
          }
          contentNumber={currentState.tabNumber}
        />
      </div>
    </Layout>
  )
}
