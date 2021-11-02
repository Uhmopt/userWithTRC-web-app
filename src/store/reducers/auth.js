/* eslint-disable import/no-anonymous-default-export */
import jwt_decode from 'jwt-decode'
import { jsonParse } from 'lib/json'

const initialState = {
  user: {},
  isAuth: false,
  token: '',
}

const restoreState = {
  ...initialState,
  ...(jsonParse(sessionStorage.getItem('level-store'))?.auth ?? {}),
}

const setAuth = (state = initialState, payload) => {
  const user = payload?.user ?? {}
  if (user?.user_token ?? '') {
    state = {
      ...state,
      isAuth: true,
      token: user?.user_token,
    }
  }
  state = {
    ...state,
    user: user,
  }
  return state
}

const checkAuth = (state = restoreState, payload) => {
  const token = state?.token ?? ''
  if (token) {
    var decodedToken = jwt_decode(token, { complete: true })
    var dateNow = new Date()

    const isValid = decodedToken.exp > dateNow.getTime() / 1000

    if (isValid && token) {
      return { ...(state ?? initialState), isAuth: true }
    }
  }
  return state
}

const logout = (state = initialState) => {
  sessionStorage.clear()
  return state
}

const auth = (state = restoreState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_REGISTER':
      return setAuth(state, payload)
    case 'IS_VERIFIED':
      return {
        ...state,
        ...payload,
      }
    case 'SET_LOGIN':
      return setAuth(state, payload)
    case 'FORGOT_PASSWORD':
      return {
        ...state,
        ...payload,
      }
    case 'SET_UPGRADE':
      return {
        ...state,
        ...payload,
      }
    case 'RESET_PASSWORD':
      return setAuth(state, payload)
    case 'GET_USER':
      return setAuth(state, payload)
    case 'LOGOUT':
      return logout()
    case 'RESET_AUTH':
      return initialState
    case 'AUTH_CHECK':
      return checkAuth(state, payload)
    case 'SET_UPDATE':
      return setAuth(state, payload)
    default:
      return state
  }
}
export default auth
