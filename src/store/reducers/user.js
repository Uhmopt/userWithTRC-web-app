/* eslint-disable import/no-anonymous-default-export */
import jwt_decode from "jwt-decode";
import http from "lib/http";


const user = JSON.parse(localStorage.getItem('user'))
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null }

const checkAuth = (state, payload) => {
  const isExpired = false
  const token = localStorage.getItem('access_token')
  const decodedToken = jwt_decode(token, { complete: true })
  const dateNow = new Date()

  if (decodedToken.exp < dateNow.getTime() / 60000) {

    return initialState
  } else {
    
    const stateObj = Object.assign({}, state, {
      isAuthenticated: !isExpired && !!localStorage.getItem('access_token'),
      user: JSON.parse(localStorage.getItem('user')),
    })
    if (state.isAuthenticated) {
      http.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
        "access_token"
      )}`;
    }
    return stateObj

  }
}

const userReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case "SET_REGISTER":
      return {
        ...state,
        ...payload
      }
    case "IS_VERIFIED":
      return {
        ...state,
        ...payload
      }
    case "SET_LOGIN":
      return {
        ...state,
        ...payload
      }
    case "FORGOT_PASSWORD":
      return {
        ...state,
        ...payload
      }
    case "RESET_PASSWORD":
      return {
        ...state
      }
    default:
      return state;
  }
}
export default userReducer
