import Home from '../pages/home'
import auth from './routes/auth'
import home from './routes/home'

const routes = [
  // page for guest
  {
    path: `/`,
    exact: true,
    auth: true,
    component: Home,
  },
  ...auth,
  ...home
]

export default routes
