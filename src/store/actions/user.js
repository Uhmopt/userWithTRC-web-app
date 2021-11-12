import axios from 'axios'
const API_URL = 'http://66.42.111.49/app/back/'

export const isLoginUpgrade = (data) => async (dispatch) => {
  const token =
    JSON.parse(localStorage.getItem('level-store'))?.auth?.token ?? ''
  return await axios
    .post(API_URL + 'is-login-upgrade', data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return res?.data ?? {}
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response)
        return err?.response?.data ?? {}
      }
    })
}

export const updateUserInfo = (data) => async (dispatch) => {
  const token =
    JSON.parse(localStorage.getItem('level-store'))?.auth?.token ?? ''
  return await axios
    .post(API_URL + 'update-user', data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res.data)
      return res?.data ?? {}
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response)
        return err?.response?.data ?? {}
      }
    })
}

export const updateAdmin = (data) => async (dispatch) => {
  const token =
    JSON.parse(localStorage.getItem('level-store'))?.auth?.token ?? ''
  return await axios
    .post(API_URL + 'update-admin', data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res.data)
      return res?.data ?? {}
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response)
        return err?.response?.data ?? {}
      }
    })
}

export const insertUser = (data) => async (dispatch) => {
  const token =
    JSON.parse(localStorage.getItem('level-store'))?.auth?.token ?? ''
  return await axios
    .post(API_URL + 'insert-user', data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res.data)
      return res?.data ?? {}
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response)
        return err?.response?.data ?? {}
      }
    })
}

export const deleteUser = (data) => async (dispatch) => {
  const token =
    JSON.parse(localStorage.getItem('level-store'))?.auth?.token ?? ''
  return await axios
    .post(API_URL + 'delete-user', data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res.data)
      return res?.data ?? {}
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response)
        return err?.response?.data ?? {}
      }
    })
}

export const getUser = (data) => async (dispatch) => {
  const token =
    JSON.parse(localStorage.getItem('level-store'))?.auth?.token ?? ''
  return await axios
    .post(API_URL + 'get-user', data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res.data)
      return res?.data ?? {}
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response)
        return err?.response?.data ?? {}
      }
    })
}

export const getUserPayment = (user_id) => async (dispatch) => {
  const token =
    JSON.parse(localStorage.getItem('level-store'))?.auth?.token ?? ''
  return await axios
    .post(
      API_URL + 'user-payments',
      { user_id: user_id },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    )
    .then((res) => {
      console.log(res.data)
      return res?.data ?? {}
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response)
        return err?.response?.data ?? {}
      }
    })
}

export const getAdminList = (data) => async (dispatch) => {
  const token =
    JSON.parse(localStorage.getItem('level-store'))?.auth?.token ?? ''
  return await axios
    .post(API_URL + 'get-admins', data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res?.data?.result ?? [], 'sssssssss')
      return res?.data?.result ?? []
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response)
      }
    })
}
