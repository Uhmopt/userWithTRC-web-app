import Home from '../pages/home'
import auth from './routes/auth'
import home from './routes/home'
import admin from './routes/admin'

const routes = [
  // page for guest
  {
    path: `/`,
    exact: true,
    auth: true,
    component: Home,
  },
  ...admin,
  ...auth,
  ...home
]

export default routes
