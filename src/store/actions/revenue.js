import axios from 'axios'
const API_URL = 'http://66.42.111.49/app/back/'

export const getCurrentSetting = () => async (dispatch) => {

  const token =
    JSON.parse(localStorage.getItem('level-store'))?.auth?.token ?? ''
  return await axios
    .post(
      API_URL + 'get-setting',
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    )
    .then((res) => {
      return res?.data?.result ?? []
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response)
      }
    })
}

export const updateSetting = (data={}) => async ( dispatch ) => {
  const { isLogin, isRegister, isUpgrade, specifiedUser, smtpUser, smtpPass, adminEmail, userId } = data;
  const token =
  JSON.parse(localStorage.getItem('level-store'))?.auth?.token ?? ''
return await axios
  .post(
    API_URL + 'update-setting',
    {
      userId: userId,
      isLogin: isLogin?1:0,
      isRegister: isRegister?1:0,
      isUpgrade: isUpgrade?1:0,
      specifiedUser: specifiedUser ?? 0,
      smtpUser: smtpUser ?? '',
      smtpPass: smtpPass ?? '',
      adminEmail: adminEmail ?? ''
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  )
  .then((res) => {
    return res?.data ?? {}
  })
  .catch((err) => {
    if (err.response) {
      console.log(err.response)
    }
  })
}

export const updateLevelAmount = (user_id=0, level_id=0, level_amount=0) => async (dispatch) => {

  console.log( user_id, level_id, level_amount )

  const token = JSON.parse(localStorage.getItem('level-store'))?.auth?.token ?? ''
  return await axios
    .post(
      API_URL + 'update-amount',
      {
        user_id: user_id,
        level_id: level_id,
        level_amount: level_amount * Math.pow( 10, 6 ),
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    )
    .then((res) => {
      return res?.data
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response)
      }
    })
}