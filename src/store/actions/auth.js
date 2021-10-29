import axios from 'axios'

const API_URL = 'http://localhost:5010/app/user/'
export const register = (email = '', password = '', walletAddress = '', invite = '') => (
  dispatch,
) => {
  return axios
    .post(API_URL + 'register', {
      user_email: email,
      user_password: password,
      user_wallet_address: walletAddress,
      user_invited_from: invite
    })
    .then(function (response) {
      const user = response?.data?.result ?? {}
      dispatch({
        type: 'SET_REGISTER',
        payload: { user: user },
      })
      return response?.data ?? {}
    })
    .catch(function (error) {
      if (error.response) {
        return error?.response?.data ?? false
      }
      return false
    })
}

export const verification = (email = '', verifyCode = '') => (dispatch) => {
  return axios
    .post(API_URL + 'verification', {
      user_email: email,
      user_verify_code: verifyCode,
    })
    .then(function (response) {
      const user = response?.data?.result ?? {}
      dispatch({
        type: 'IS_VERIFIED',
        payload: { user: user },
      })
      return response?.data ?? {}
    })
    .catch(function (error) {
      if (error.response) {
        return error?.response?.data ?? false
      }
      return false
    })
}

export const login = (email, password, isRemember) => (dispatch) => {
  return axios
    .post(API_URL + 'login', {
      user_email: email,
      user_password: password,
      isRemember: isRemember,
    })
    .then(function (response) {
      const user = response?.data?.result ?? {}
      dispatch({
        type: 'SET_LOGIN',
        payload: { user: user },
      })
      return response?.data ?? {}
    })
    .catch(function (error) {
      if (error.response) {
        return error?.response?.data ?? false
      }
      return false
    })
}

export const forgotPassword = (email) => (dispatch) => {
  return axios
    .post(API_URL + 'forgot-password', {
      user_email: email,
    })
    .then(function (response) {
      const user = response?.data?.result ?? {}
      dispatch({
        type: 'FORGOT_PASSWORD',
        payload: { user: user },
      })
      return response?.data ?? {}
    })
    .catch(function (error) {
      if (error.response) {
        return error?.response?.data ?? false
      }
      return false
    })
}

export const resetPassword = (email = '', verifyCode = '', password = '') => (
  dispatch,
) => {
  return axios
    .post(API_URL + 'reset-password', {
      user_email: email,
      user_password: password,
      user_verify_code: verifyCode,
    })
    .then(function (response) {
      const user = response?.data?.result ?? {}
      dispatch({
        type: 'RESET_PASSWORD',
        payload: { user: user },
      })
      return response?.data ?? {}
    })
    .catch(function (error) {
      if (error.response) {
        return error?.response?.data ?? false
      }
      return false
    })
}

export const logout = () => (dispatch) => {
  return dispatch({
    type: 'LOGOUT',
  })
}
