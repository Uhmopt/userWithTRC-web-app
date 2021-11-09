
export const getFriendArray = ( userId, userList ) => {
  let levelUsers = [];
  let tmpUserIds = []
  userList = userList.filter( (user)=>{
    return userId !== user.user_id
  } )
  tmpUserIds.push( userId );
  for (let i = 0; i <= 16; i++) {
    levelUsers[i] = filterByIds( tmpUserIds, userList );
    if (levelUsers[i].length > 0) {
      tmpUserIds = Array.from(levelUsers[i], user=> user?.user_id ?? 0);
    }else {
      break;
    }
  }
  return levelUsers;
}

export const filterByIds = ( userIds = [], userLists = [] ) => {
  console.log( userIds, "USERIDS" )
  const filterUserList = userLists.filter( item => userIds?.includes(item?.user_invited_from ?? 0) );
  console.log(filterUserList, 'dddd')
  return filterUserList;
}

export const getAutoCompleteUsers = ( userLists = [] ) => {
  const tmpList = userLists.map((user, index)=>{
    return {
      label: user?.user_email + " // " + user?.user_rid + " // " + user.user_level,
      user_id: user.user_id,
    }
  })
  return tmpList;
}
