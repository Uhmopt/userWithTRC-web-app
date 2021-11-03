/* eslint-disable import/no-anonymous-default-export */
import { jsonParse } from 'lib/json'

const initialState = {}

const restoreState = {
  ...initialState,
  ...(jsonParse(localStorage.getItem('level-store'))?.upgrade ?? {}),
}

const upgrade = (state = restoreState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_PAYMENT':
      return {
        ...state,
        ...payload,
      }
    default:
      return state
  }
}
export default upgrade
