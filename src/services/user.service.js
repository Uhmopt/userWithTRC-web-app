import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://66.42.111.49:5000/app/test/'

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all')
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() })
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() })
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() })
  }
}

export default new UserService()
