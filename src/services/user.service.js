
export const getFriendArray = ( userId, userList ) => {
  let levelUsers = [];
  let tmpUserIds = []
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
  const filterUserList = userLists.filter( item => userIds.includes(item?.user_invited_from ?? 0) );
  console.log(filterUserList, 'dddd')
  return filterUserList;
}
