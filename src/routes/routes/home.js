import Home from 'pages/home'
import LevelUser from 'pages/levelUser'
import Revenue from 'pages/revenue'
import Upgrade from 'pages/upgrade'

const home = [
  // page for auth
  {
    path: `/home`,
    exact: true,
    auth: false,
    component: Home,
  },
  {
    path: `/level-users`,
    exact: true,
    auth: false,
    component: LevelUser,
  },
  {
    path: `/revenue`,
    exact: true,
    auth: false,
    component: Revenue,
  },
  {
    path: `/upgrade`,
    exact: true,
    auth: false,
    component: Upgrade,
  },
]

export default home
