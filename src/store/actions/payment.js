import axios from 'axios'
import { getTransInfo } from 'services/payment.service'
import httpConfig from 'lib/httpConfig'

const API_URL = 'http://66.42.111.49/app/payment/'

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
export const GetAmountAddress = ( user_level=0, user_superior_id='' ) => async (
  dispatch,
) => {
  return await axios
    .post(
      API_URL + 'get-amount-address',
      {
        user_level: user_level,
        user_superior_id: user_superior_id
      },
      httpConfig,
    )
    .then(function (response) {
      const result = response?.data?.result ?? {}
      dispatch({
        type: 'SET_PAYMENT',
        payload: result,
      })
      console.log(response?.data ?? {}, 'dddddddddddddddddd')
      return response?.data ?? {}
    })
    .catch(function (error) {
      if (error.response) {
        return error?.response?.data ?? false
      }
      return false
    })
}
