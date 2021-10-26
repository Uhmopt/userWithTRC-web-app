import axios from 'axios'
import httpConfig from 'lib/httpConfig'

const API_URL = 'http://localhost:5010/app/home/'

export const getLeveList = () => (dispatch) => {
  return axios
    .post(API_URL + 'get-levels', {}, httpConfig)
    .then((res) => {
      dispatch({
        type: 'GET_LEVELS',
        payload: { levelList: res?.data?.result ?? [] },
      })
      return res?.data?.result ?? []
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response)
      }
    })
}

export const getUserList = () => (dispatch) => {
  return axios
    .post(API_URL + 'get-users', {}, httpConfig)
    .then((res) => {
      dispatch({
        type: 'GET_USERS',
        payload: { userList: res?.data?.result ?? [] },
      })
      return res?.data?.result ?? []
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response)
      }
    })
}

export const getPaymentList = (user_id = '') => (dispatch) => {
  return Boolean(user_id)
    ? axios
        .post(API_URL + 'get-payments', { user_id: user_id }, httpConfig)
        .then((res) => {
          dispatch({
            type: 'GET_PAYMENTS',
            payload: { paymentList: res?.data?.result ?? [] },
          })
          return res?.data?.result ?? []
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response)
          }
        })
    : false
}
