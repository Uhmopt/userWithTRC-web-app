/* eslint-disable react-hooks/exhaustive-deps */
import { Person, PersonAdd } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import { Card, CardHeader, Grid, IconButton } from '@mui/material'
import AdminEditTable from 'components/AdminEditTable'
import CustomInput from 'components/CustomInput'
import InsertUserModal from 'components/InserUserModal'
import NavButton from 'components/NavButton'
import SelectBox from 'components/SelectBox'
import TableSwipeableViews from 'components/TableSwipeableViews'
import UserEditTable from 'components/UserEditTable'
import Layout from 'layouts'
import notification from 'lib/notification'
import { useConfirm } from 'material-ui-confirm'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getDropDownLevelList } from 'services/level.service'
import { getAllPaymentList, getLeveList, getUserList } from 'store/actions/home'
import { getAdminList } from 'store/actions/user'
import {
  deleteUser,
  insertUser,
  updateAdmin,
  isLoginUpgrade,
  updateUserInfo,
} from 'store/actions/user'

const defaultState = {
  adminList: [],
  userList: [],
  levelList: [],
  searItem: '',
  sortBy: '',
  isOpen: false,
  isInsert: true,
  updateAdminData: {}
}
export default function Users(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const home = useSelector((state) => state?.home ?? {})
  const auth = useSelector((state) => state?.auth ?? {})
  const confirm = useConfirm()
  const [currentState, setCurrentSate] = useState(defaultState)
  const [tabNumber, setTabNumber] = useState(0)
  useEffect(() => {
    // Note: Get all User and Revenue list first time
    // Save it to store
    dispatch(getUserList())
    dispatch(getLeveList())
    dispatch(getAllPaymentList())
  }, [])
  useEffect(() => {
    init()
  }, [home, currentState.searItem, currentState.sortBy])
  // Note: Init function in this field
  const init = () => {
    // Note: Set the level list of store as the dropdown list
    const tmpLevelList = getDropDownLevelList(home?.levelList ?? [])
    console.log(home?.userList ?? [])
    const tmpUserList = (home?.userList ?? []).filter((user) => {
      return (
        (user?.user_email?.includes(currentState?.searItem) ||
          (user?.user_rid ?? '').toString().includes(currentState?.searItem)) &&
        user?.user_level.toString().includes(currentState?.sortBy?.toString())
      )
    })
    console.log(tmpUserList ?? [])
    // Note: Set UserList by Search Item
    setCurrentSate((prevState = defaultState) => ({
      ...(prevState ?? defaultState),
      levelList: tmpLevelList,
      userList: tmpUserList ?? [],
    }))
    dispatch(getAdminList({admin_id: auth?.user?.user_id ?? 0})).then((res)=>{
      setCurrentSate((prevState = defaultState) => ({
        ...(prevState ?? defaultState),
        adminList: res ?? []
      }))
    })
  }
  // Note: Handle Search option
  const handleSearch = (e) => {
    setCurrentSate((prevState = defaultState) => ({
      ...(prevState ?? defaultState),
      searItem: e.target.value,
    }))
  }
  // Note: Handle Sort by Level options
  const handleSort = (e) => {
    setCurrentSate((prevState = defaultState) => ({
      ...(prevState ?? defaultState),
      sortBy: e?.target?.value ?? '',
    }))
  }

  const handleChange = (param) => {
    setTabNumber(param)
  }
  // Note: Open Insert User Modal
  const openModal = () => {
    setCurrentSate((prevState = defaultState) => ({
      ...(prevState ?? defaultState),
      isOpen: !prevState?.isOpen,
      isInsert: true
    }))
  }
  // Note: Update the user's Login and Upgrade
  const handleLoginUpgrade = (e) => {
    console.log({ [e.target.name]: e.target.checked }, e.target.value)
    const data = {
      user_id: auth?.user?.user_id ?? 0,
      update_user_id: e.target.value,
      update: { [e.target.name]: e.target.checked ? 1 : 0 },
    }
    dispatch(isLoginUpgrade(data))
      .then((res) => {
        if (res?.result ?? false) {
          notification('success', res?.msg ?? 'success')
          dispatch(getUserList())
        } else {
          notification(
            'error',
            res?.msg ?? 'Please make sure your network connection.',
          )
        }
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }
  // Note Update User Data
  const handleUpdateUser = (e) => {
    const updateData = {
      admin_id: auth?.user?.user_id ?? 0,
      user_id: e?.id,
      user_email: e?.user_email,
      user_level: e?.user_level,
      user_rid: e?.user_rid,
      user_wallet_address: e?.user_wallet_address,
    }
    dispatch(updateUserInfo(updateData))
      .then((res) => {
        if (res?.result ?? false) {
          notification('success', res?.msg ?? 'success')
          dispatch(getUserList())
        } else {
          notification(
            'error',
            res?.msg ?? 'Please make sure your network connection.',
          )
        }
      })
      .catch((err) => {
        console.log(err, 'err')
      })
    console.log(updateData, 'This is the Update Data')
  }
  // Note Update User Data
  const handleDeleteUser = (e) => {
    confirm({ description: 'Do you want to delete the selected user?' })
      .then(() => {
        const deleteDate = {
          admin_id: auth?.user?.user_id ?? 0,
          user_id: e,
        }
        dispatch(deleteUser(deleteDate))
          .then((res) => {
            if (res?.result ?? false) {
              notification('success', res?.msg ?? 'success')
              dispatch(getUserList())
            } else {
              notification(
                'error',
                res?.msg ?? 'Please make sure your network connection.',
              )
            }
          })
          .catch((err) => {
            console.log(err, 'err')
          })
      })
      .catch(() => {})
  }
  // Note: Update Admin
  const openEditModal = (data) => {
    setCurrentSate((prevState = defaultState) => ({
      ...(prevState ?? defaultState),
      isOpen: !prevState?.isOpen,
      isInsert: false,
      updateAdminData: data
    }))
  }
  // Note Go to Revenue page
  const handleToRevenue = (e) => {
    console.log(e)
    history.push({ pathname: 'user-revenue', state: e })
  }
  // Note: Insert New User
  const handleInsertUser = (data) => {
    const insertData = {
      user_id: auth?.user?.user_id ?? 0,
      user_email: data?.email ?? '',
      user_wallet_address: data?.walletAddress,
      user_password: data?.password,
      user_invited_from: data?.invite,
      user_role: data?.role,
    }
    dispatch(insertUser(insertData))
      .then((res) => {
        if (res?.result ?? false) {
          notification('success', res?.msg ?? 'success')
          openModal()
          dispatch(getUserList())
        } else {
          openModal()
          notification(
            'error',
            res?.msg ?? 'Please make sure your network connection.',
          )
        }
      })
      .catch((err) => {
        console.log(err, 'err')
      })
  }
  const handleUpdateAdmin = ({...data}) => {
    data = {
      ...data,
      admin_id: auth?.user?.user_id
    }
    dispatch(updateAdmin(data))
    .then((res) => {
      if (res?.result ?? false) {
        notification('success', res?.msg ?? 'success')
        openModal()
        init()
      } else {
        openModal()
        notification(
          'error',
          res?.msg ?? 'Please make sure your network connection.',
        )
      }
    })
    .catch((err) => {
      console.log(err, 'err')
    })
  }
  return (
    <Layout isLogin={true} maxWidth="xl" admin={true} title="User List">
      <Grid container rowSpacing={3}>
        <Grid item xs={6} textAlign={'left'}>
          <IconButton color="primary" onClick={openModal}>
            <PersonAdd fontSize="large" />
          </IconButton>
          <label className="text-main">Add New</label>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={5} textAlign={'right'}>
          <CustomInput
            name="searItem"
            type="text"
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
        </Grid>
        <Grid item xs={12}>
          <NavButton
            tabLabelOne="User"
            tabLabelTwo="Admin"
            tabNumber={tabNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TableSwipeableViews
            contentOne={
              <Card>
                <CardHeader
                  title={
                    <h1>
                      <Person />
                      User List
                    </h1>
                  }
                  action={
                    <div>
                      <SelectBox
                        label={'Sort by level'}
                        itemList={currentState?.levelList ?? []}
                        onChange={handleSort}
                        value={currentState?.sortBy ?? 0}
                      />
                    </div>
                  }
                  subheader={`Total People: ${
                    (currentState?.userList ?? []).length
                  }`}
                />
                {/* Note: Edit User table, insert, edit, delete */}
                <UserEditTable
                  userList={currentState?.userList ?? []}
                  onLoginUpgrade={handleLoginUpgrade}
                  onUpdateUser={handleUpdateUser}
                  onDeleteUser={handleDeleteUser}
                  onToRevenue={handleToRevenue}
                />
              </Card>
            }
            contentTwo={
              <Card>
                <CardHeader
                  title={
                    <h1>
                      <Person />
                      Admin List
                    </h1>
                  }
                  subheader={`Total People: ${
                    (currentState?.adminList ?? []).length
                  }`}
                />
                {/* Note: Edit User table, insert, edit, delete */}
                <AdminEditTable
                  userList={currentState?.adminList ?? []}
                  onDeleteUser={handleDeleteUser}
                  onEditAdmin={openEditModal}
                />
              </Card>
            }
            contentNumber={tabNumber}
          />
        </Grid>
      </Grid>
      <InsertUserModal
        isOpen={currentState?.isOpen}
        isInsert={currentState?.isInsert}
        openModal={openModal}
        onSubmit={handleInsertUser}
        updateData = {currentState?.updateAdminData ?? {}}
        onUpdate = { handleUpdateAdmin }
      />
    </Layout>
  )
}
