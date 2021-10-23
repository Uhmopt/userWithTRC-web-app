import AuthService from '../../services/auth.service'

export const register = (email, password, walletAddress) => (dispatch) => {
  return AuthService.register(email, password, walletAddress).then(
    (data) => {
      dispatch({
        type: 'SET_AUTH',
        payload: { user: data },
      })
      return data
    },
    (error) => {
      console.log(error)
    },
  )
}

export const login = (email, password, isRemember) => (dispatch) => {
  return AuthService.login(email, password, isRemember).then(
    (data) => {
      dispatch({
        type: 'UPDATE_AUTH',
        payload: { user: data },
      })
      console.log(data)
      return data
    },
    () => {
      console.log()
    },
  )
}

export const logout = () => (dispatch) => {
  AuthService.logout()
  dispatch({
    type: 'LOGOUT',
  })
}

export const sendEmail = (email) => (dispatch) => {
  return AuthService.sendEmail(email).then(
    (data) => {
      dispatch({
        type: 'RESET_AUTH',
        payload: { user: data },
      })
      return Promise.resolve()
    },
    () => {
      console.log()
    },
  )
}
