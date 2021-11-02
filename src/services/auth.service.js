import axios from 'axios'
const API_URL = 'http://66.42.111.49:5000/app/user/'
class AuthService {
  login(email, password, isRemember) {
    return axios
      .post(API_URL + 'login', {
        user_email: email,
        user_password: password,
        isRemember: isRemember,
      })
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        if (error.response) {
          return error?.response?.data ?? false;
        }
        return false;
      })
  }

  register(email, password, walletAddress) {
    return axios
      .post(API_URL + 'register', {
        user_email: email,
        user_password: password,
        user_wallet_address: walletAddress,
      })
      .then(function (response) {
        console.log(response.data)
        return response.data
      })
      .catch(function (error) {
        if (error.response) {
          return error?.response?.data ?? false;
        }
        return false;
      })
  }
  sendEmail(email) {
    return axios.post(API_URL + 'send-email', {
      email,
    })
  }
  verification(verifyCode) {
    return axios.post(API_URL + 'verification', {
      verifyCode: verifyCode,
    })
  }
}

export default new AuthService()
