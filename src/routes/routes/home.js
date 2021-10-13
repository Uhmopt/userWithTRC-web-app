import Home from 'pages/home'
import LevelUser from 'pages/levelUser'
import Revenue from 'pages/revenue'
import Upgrade from 'pages/upgrade'
import ContactUs from 'pages/contactUs'
import Invite from 'pages/invite'
import Payment from 'pages/payment'

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
  {
    path: `/contact-us`,
    exact: true,
    auth: false,
    component: ContactUs,
  },
  {
    path: `/invite`,
    exact: true,
    auth: false,
    component: Invite,
  },
  {
    path: `/payment`,
    exact: true,
    auth: false,
    component: Payment,
  },
]

export default home
