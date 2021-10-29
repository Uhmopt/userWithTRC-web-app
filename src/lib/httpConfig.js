const token = JSON.parse(sessionStorage.getItem("level-store"))?.auth?.token??""
console.log(token, 'token')
const httpConfig = {
  headers: { Authorization: `Bearer ${token}` },
}
export default httpConfig
