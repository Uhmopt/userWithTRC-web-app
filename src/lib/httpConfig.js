import { jsonParse } from "./json"

const store = jsonParse(sessionStorage.getItem('level-store'))
const token = store?.auth?.token ?? ''
const httpConfig = {
  headers: { Authorization: `Bearer ${token}` },
}
export default httpConfig
