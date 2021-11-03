import axios from 'axios'
import { getTransInfo } from 'services/payment.service'
import httpConfig from 'lib/httpConfig'

const API_URL = 'http://66.42.111.49/app/home/'

export const getUserInfo = (user_id = 0) => async (dispatch) => {
  return await axios
    .post(API_URL + 'get-user', { user_id: user_id }, httpConfig)
    .then((res) => {
      console.log( res?.data?.result ?? {}, "USER_INFORMATION" )
      dispatch({
        type: 'GET_USER',
        payload: { user: res?.data?.result ?? {} },
      })
      return res?.data?.result ?? []
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response)
      }
    })
}

export const getLeveList = () => async (dispatch) => {
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
            payload: {
              paymentList: res?.data?.result ?? [],
            },
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
export const updateUser = (
  userId = '',
  email = '',
  password = '',
  walletAddress = '',
) => (dispatch) => {
  if (!userId || !email) {
    return false
  }
  return axios
    .post(
      API_URL + 'update',
      {
        user_id: userId,
        user_email: email,
        user_password: password,
        user_wallet_address: walletAddress,
      },
      httpConfig,
    )
    .then(function (response) {
      const user = response?.data?.result ?? {}
      dispatch({
        type: 'SET_UPDATE',
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
export const contactUs = (contactData = {}) => (dispatch) => {
  if (!(contactData?.userId ?? '')) {
    return false
  }
  return axios
    .post(
      API_URL + 'contact',
      {
        user_id: contactData?.userId ?? '',
        email: contactData?.email ?? '',
        rid: contactData?.rid ?? '',
        theme: contactData?.theme ?? '',
        contact: contactData?.contact ?? '',
      },
      httpConfig,
    )
    .then(function (response) {
      const result = response?.data?.result ?? {}
      console.log(result)
      return response?.data ?? {}
    })
    .catch(function (error) {
      if (error.response) {
        return error?.response?.data ?? false
      }
      return false
    })
}
export const contactVerify = (contactId = '', verifyCode = '') => (
  dispatch,
) => {
  console.log(contactId, verifyCode)
  if (!contactId || !verifyCode) {
    return false
  }
  return axios
    .post(
      API_URL + 'contact-verification',
      {
        contact_id: contactId,
        contact_verify_code: verifyCode,
      },
      httpConfig,
    )
    .then(function (response) {
      return response?.data ?? {}
    })
    .catch(function (error) {
      if (error.response) {
        return error?.response?.data ?? false
      }
      return false
    })
}
export const submitHash = (hash = '') => async (dispatch) => {
  const hashInfo = await getTransInfo(hash)
  console.log(hashInfo)
  return hashInfo && (hashInfo?.from ?? '') && (hashInfo?.to ?? '')
    ? axios
        .post(API_URL + 'submit-hash', { ...hashInfo }, httpConfig)
        .then(function (response) {
          // const user = response?.data?.result ?? {}
          // console.log(response)
          // dispatch({
          //   type: 'SET_UPDATE',
          //   payload: { user: user },
          // })
          // return response?.data ?? {}
        })
        .catch(function (error) {
          if (error.response) {
            return error?.response?.data ?? false
          }
          return false
        })
    : false
}
