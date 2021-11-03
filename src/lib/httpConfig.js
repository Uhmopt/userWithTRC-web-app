const token = JSON.parse(localStorage.getItem("level-store"))?.auth?.token??""
const httpConfig = {
  headers: { Authorization: `Bearer ${token}` },
}
export default httpConfig
