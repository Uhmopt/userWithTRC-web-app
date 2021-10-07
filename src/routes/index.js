import Home from '../pages/home'

const routes = [
  // page for guest
  {
    path: `/`,
    exact: true,
    auth: false,
    component: Home,
  },
]

export default routes
