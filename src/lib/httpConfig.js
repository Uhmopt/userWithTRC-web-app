const token = JSON.parse(localStorage.getItem("access-token")) ?? ""
const httpConfig = {
  headers: { Authorization: `Bearer ${token}` },
}
export default httpConfig
