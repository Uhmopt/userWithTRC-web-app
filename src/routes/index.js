import Home from '../pages/home'
import auth from './routes/auth'

const routes = [
  // page for guest
  {
    path: `/`,
    exact: true,
    auth: false,
    component: Home,
  },
  ...auth,
]

export default routes
