// Note: Get the User's Sibordinate List
// Core Function of Users
export const getFriendArray = (userId = 0, userList = [], maxLevel = 16) => {
  let levelUsers = []
  let tmpUserIds = []
  userList = userList.filter((user) => {
    return userId !== user.user_id
  })
  tmpUserIds.push(userId)
  for (let i = 0; i < maxLevel; i++) {
    levelUsers[i] = filterByIds(tmpUserIds, userList)
    if (levelUsers[i].length > 0) {
      tmpUserIds = Array.from(levelUsers[i], (user) => user?.user_id ?? 0)
    } else {
      break
    }
  }
  return levelUsers
}
// Note: Get the filter array from the User list by User Id
export const filterByIds = (userIds = [], userLists = []) => {
  const filterUserList = userLists.filter((item) =>
    userIds?.includes(item?.user_invited_from ?? 0),
  )
  return filterUserList
}
// Note: Get the Autocomplete User List
// ex: label: {"Email // Id // Level", value: User Id}
export const getAutoCompleteUsers = (userLists = []) => {
  const tmpList = userLists.map((user, index) => {
    return {
      label:
        user?.user_email + ' // ' + user?.user_rid + ' // ' + user.user_level,
      user_id: user.user_id,
    }
  })
  return tmpList
}
// Note: Get the Const items of user table
export const userTableUserItems = () => {
  const userItems = [
    {
      label: 'ID',
      key: 'user_rid',
    },
    {
      label: 'E-mail',
      key: 'user_email',
    },
    {
      label: 'Wallet',
      key: 'user_wallet_address',
    },
    {
      label: 'Level',
      key: 'user_level',
    },
    {
      label: 'Cumulative Revenue',
      key: 'user_cumulative',
    },
    {
      label: 'Subordinate',
      key: 'user_subordinate',
    },
    {
      label: 'Join time',
      key: 'user_register_date',
    },
    {
      label: 'Operating',
      key: 'user_operating',
    },
  ]
  return userItems
}
// Note: Get the Const items of user table
export const adminTableUserItems = () => {
  const userItems = [
    {
      label: 'E-mail',
      key: 'user_email',
    },
    {
      label: 'Join time',
      key: 'user_register_date',
    },
    {
      label: 'Operating',
      key: 'operating',
    },
  ]
  return userItems
}
// Note: Get the Const items of user table disable Items
export const userTableDisableItems = () => {
  const disbleItems = [
    'user_operating',
    'user_subordinate',
    'user_register_date',
    'user_cumulative',
  ]
  return disbleItems
}