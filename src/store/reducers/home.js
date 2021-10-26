/* eslint-disable import/no-anonymous-default-export */
import { jsonParse } from 'lib/json'

const initialState = {
  userList: [],
  levelList: [],
}

const restoreState = {
  ...initialState,
  ...(jsonParse(sessionStorage.getItem('level-store'))?.home ?? {}),
}

const home = (state = restoreState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_LEVELS':
      console.log(payload, 'Payment')
      return {
        ...state,
        ...payload,
      }
    case 'GET_USERS':
      return {
        ...state,
        ...payload,
      }
    case 'GET_PAYMENTS':
      return {
        ...state,
        ...payload,
      }
    default:
      return state
  }
}
export default home
