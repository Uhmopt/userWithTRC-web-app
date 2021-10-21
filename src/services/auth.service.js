import axios from "axios";

const API_URL = "http://localhost:5010/app/user/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", { user_email: email, user_password:  password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(email, password) {
    return axios.post(API_URL + "register", {
      email,
      password,
    });
  }
}

export default new AuthService();