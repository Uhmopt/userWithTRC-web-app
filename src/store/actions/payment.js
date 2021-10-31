import axios from 'axios'
import { getTransInfo } from 'services/payment.service'
import httpConfig from 'lib/httpConfig'

const API_URL = 'http://localhost:5010/app/payment/'

export const submitHash = (hash = '') => async (dispatch) => {
  const hashInfo = await getTransInfo(hash)
  console.log(hashInfo)
  return hashInfo && (hashInfo?.from ?? '') && (hashInfo?.to ?? '')
    ? axios
        .post(API_URL + 'submit-hash', {...hashInfo}, httpConfig)
        .then(function (response) {
          const result = response?.data?.result ?? {}
          if (result) {
            dispatch({
              type: 'SET_UPGRADE',
              payload: {
                user: result
              },
            })
          }
          return result
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
export const GetAmountAddress = ( userId='' ) => (
  dispatch,
) => {
  if (!userId) {
    return false
  }
  return axios
    .post(
      API_URL + 'get-amount-address',
      {
        user_id: userId,
      },
      httpConfig,
    )
    .then(function (response) {
      const result = response?.data?.result ?? {}
      console.log( result )
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
