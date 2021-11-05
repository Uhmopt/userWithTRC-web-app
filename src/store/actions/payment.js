import axios from 'axios'
import { getTransInfo } from 'services/payment.service'
// import httpConfig from 'lib/httpConfig'

const API_URL = 'http://localhost:5000/app/payment/'

export const submitHash = (hash = '') => async (dispatch) => {
  const token =
    JSON.parse(localStorage.getItem('level-store'))?.auth?.token ?? ''
  const hashInfo = await getTransInfo(hash)
  return hashInfo && (hashInfo?.to ?? '')
    ? axios
        .post(
          API_URL + 'submit-hash',
          { ...hashInfo },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        )
        .then(function (response) {
          const result = response?.data?.result ?? {}
          if (result) {
            dispatch({
              type: 'SET_UPGRADE',
              payload: {
                user: result,
              },
            })
          }
          return response?.data ?? {}
        })
        .catch(function (error) {
          if (error.response) {
            return error?.response?.data ?? false
          }
          return false
        })
    : false
}
// Note: Get superior wallet address and necessary amount to pay to superior
export const GetAmountAddress = (
  user_level = 0,
  user_superior_id = '',
) => async (dispatch) => {
  const token =
    JSON.parse(localStorage.getItem('level-store'))?.auth?.token ?? ''
  return await axios
    .post(
      API_URL + 'get-amount-address',
      {
        user_level: user_level,
        user_superior_id: user_superior_id,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    )
    .then(function (response) {
      const result = response?.data?.result ?? {}
      dispatch({
        type: 'SET_PAYMENT',
        payload: result,
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
