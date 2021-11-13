import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link
} from '@mui/material'
import { getLevels } from 'lib/levels'
import { getMaxLevel } from 'lib/levels'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { calTotalRevenue } from 'services/revenue.service'
import { getFriendArray, userTableDisableItems, userTableUserItems } from 'services/user.service'
import EditTable from './EditTable'

export default function UserEditTable({
  userList = [],
  onLoginUpgrade = () => {},
  onUpdateUser = () => {},
  onDeleteUser = () => {},
  onToRevenue = () => {}
}) {
  console.log(userList, "USERLIST")
  const paymentList = useSelector((state) => state?.home?.paymentList ?? [])
  const home = useSelector((state) => state?.home ?? [])
  const [tableUsers, setTableUsers] = useState([])
  useEffect(() => {
    setTableUsers(userList)
  }, [userList])
  // Note: User Table Items
  // const data
  const userItems = userTableUserItems()
  const disbleItems = userTableDisableItems()
  const tableUserList = (tableUsers ?? []).map((user, rowIndex) => {
    const user_cumulative = calTotalRevenue(paymentList, user?.user_id ?? '')
    // Note: Get User's Sub Friend List
    const tmpUserSub = getFriendArray(user?.user_id, tableUsers, getMaxLevel(getLevels(home?.levelList)))
    const tmpTotalNum = (tmpUserSub ?? []).reduce((x, y) => x + y.length, 0)
    const toFriendUser = (index = 0) => {
      setTableUsers(tmpUserSub[index])
    }
    const user_subordinate = (
      <div key={rowIndex} className="text-center">
        <label className="font-bold">Total: </label>
        <label>{tmpTotalNum}</label>
        {tmpUserSub.map((levelUsers, index) => (
          <Link
            key={index}
            onClick={() => toFriendUser(index)}
            className="cursor-pointer"
          >
            {(levelUsers ?? []).length !== 0 && (
              <div>
                Level{index + 1} Friends:{levelUsers.length}
              </div>
            )}
          </Link>
        ))}
      </div>
    )
    const user_operating = (
      <div>
        <Button onClick={()=>onToRevenue(user?.user_id ?? '')}>View Revenue</Button>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="user_allow_login"
                checked={user?.user_allow_login === 1}
                value={user?.user_id}
                onChange={
                  typeof onLoginUpgrade === 'function'
                    ? onLoginUpgrade
                    : console.log('error')
                }
              />
            }
            label="Login"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="user_allow_upgrade"
                checked={user?.user_allow_upgrade === 1}
                value={user?.user_id}
                onChange={
                  typeof onLoginUpgrade === 'function'
                    ? onLoginUpgrade
                    : console.log('error')
                }
              />
            }
            label="Upgrade"
          />
        </FormGroup>
      </div>
    )
    return {
      id: user?.user_id ?? '',
      user_email: user?.user_email ?? '',
      user_rid: user?.user_rid ?? 0,
      user_level: user?.user_level ?? 0,
      user_cumulative: user_cumulative,
      user_subordinate: <div>{user_subordinate}</div>,
      user_wallet_address: user?.user_wallet_address ?? '',
      user_operating: user_operating,
      user_register_date:
        moment(user?.user_register_date).format('YYYY-MM-DD') ??
        moment().format('YYYY-MM-DD'),
    }
  })
  return (
    <EditTable
      rowList={tableUserList ?? []}
      itemList={userItems}
      onSave={onUpdateUser}
      onDelete={onDeleteUser}
      disableEditList={disbleItems}
      isDeleteAble={true}
    />
  )
}
