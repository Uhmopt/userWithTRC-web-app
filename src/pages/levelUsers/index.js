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
import { getFriendArray } from 'services/user.service'
import { useTranslation } from 'react-i18next'

const defaultState = {
  tabNumber: 0,
  usersByLevel: [],
  allUsersByLevel: [],
  searItem: '',
}
export default function LevelUsers(props) {
  const { t } = useTranslation()
  const home = useSelector((state) => state?.home ?? {})
  const user = useSelector((state) => state?.auth?.user ?? {})
  const [currentState, setCurrentState] = useState(defaultState)

  const levelOrder = (numbre = 0) => {
    switch (Number(numbre)) {
      case 0:
        return t('Registered')
      case 1:
        return t('First')
      case 2:
        return t('Second')
      case 3:
        return t('Third')
      case 4:
        return t('Fourth')
      case 5:
        return t('Fifth')
      case 6:
        return t('Sixth')
      case 7:
        return t('Seventh')
      case 8:
        return t('Eighth')
      case 9:
        return t('Ninth')
      case 10:
        return t('Tenth')
      case 11:
        return t('Eleventh')
      case 12:
        return t('Twelfth')
      case 13:
        return t('Thirteenth')
      case 14:
        return t('Fourteenth')
      case 15:
        return t('Fifteenth')
      case 16:
        return t('Sixteenth')
      case 17:
        return t('Seventeenth')
      case 18:
        return t('Eighteenth')
      case 19:
        return t('Nineteenth')
      case 20:
        return t('Twentieth')
      default:
        return t('Registered')
    }
  }

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
        <label className="text-title font-bold">{t('totalUser')}</label>
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
        <label className="text-title font-bold">{t('upgraded')}</label>
        <br />
        <label className="font-bold text-main">
          {currentState?.usersByLevel?.length ?? 0}
        </label>
      </div>
    </>
  )
  return (
    <Layout isLogin={true} title={`${levelOrder(level)} ${t('level')} ${t('user')}`} before={'home'}>
      <div className="rounded-md h-20 self-center align-middle text-center">
        <StaticCard content1={totalUser} content2={upgraded} />
      </div>
      <div className="pt-8">
        <NavButton
          tabLabelOne={t('allUsers')}
          tabLabelTwo={t('upgraded')}
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
          placeholder={t('searchDscrpt')}
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
