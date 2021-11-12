import { Delete, Edit } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { adminTableUserItems } from 'services/user.service'
import EditTable from './EditTable'

export default function AdminEditTable({
  userList = [],
  onDeleteUser = () => {},
  onEditAdmin = () => {}
}) {
  const [tableUsers, setTableUsers] = useState([])
  useEffect(() => {
    setTableUsers(userList)
  }, [userList])
  // Note: User Table Items
  // const data
  const userItems = adminTableUserItems()
  const tableUserList = (tableUsers ?? []).map((user, rowIndex) => {
    const operating = (
      <div>
        <IconButton onClick={()=>onEditAdmin({ user_id: user?.user_id ?? 0, user_email: user?.user_email })}>
          <Edit />
        </IconButton>
        <IconButton onClick={()=>(typeof onDeleteUser === 'function' ? onDeleteUser(user?.user_id) : console.log('error'))}>
          <Delete />
        </IconButton>
      </div>
    )
    return {
      id: user?.user_id ?? '',
      user_email: user?.user_email ?? '',
      user_register_date:
        moment(user?.user_register_date).format('YYYY-MM-DD') ??
        moment().format('YYYY-MM-DD'),
      operating: operating,
    }
  })
  return (
    <EditTable
      rowList={tableUserList ?? []}
      itemList={userItems}
      isEditAble={false}
    />
  )
}
