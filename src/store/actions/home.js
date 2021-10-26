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