/* eslint-disable import/no-anonymous-default-export */
import { jsonParse } from 'lib/json'

const initialState = {
  userList: [],
  levelList: [],
  lang: 'en'
}

const restoreState = {
  ...initialState,
  ...(jsonParse(localStorage.getItem('level-store'))?.home ?? {}),
}

const home = (state = restoreState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_LEVELS':
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
    case 'SET_LANGUAGE':
      return {
        ...state,
        ...payload,
      }
    default:
      return {
        ...state,
        ...payload,
      }
  }
}
export default home
