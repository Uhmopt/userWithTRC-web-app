import Home from 'pages/home'
import LevelUsers from 'pages/levelUsers'
import Revenue from 'pages/revenue'
import Upgrade from 'pages/upgrade'
import ContactUs from 'pages/contactUs'
import Invite from 'pages/invite'
import Payment from 'pages/payment'
import UpdateUser from 'pages/updateUser'
import HighestLevel from 'pages/highestLevel'

const home = [
  // page for auth
  {
    path: `/home`,
    exact: true,
    auth: true,
    component: Home,
  },
  {
    path: `/level-users`,
    exact: true,
    auth: true,
    component: LevelUsers,
  },
  {
    path: `/revenue`,
    exact: true,
    auth: true,
    component: Revenue,
  },
  {
    path: `/upgrade`,
    exact: true,
    auth: true,
    component: Upgrade,
  },
  {
    path: `/contact-us`,
    exact: true,
    auth: true,
    component: ContactUs,
  },
  {
    path: `/invite`,
    exact: true,
    auth: true,
    component: Invite,
  },
  {
    path: `/payment`,
    exact: true,
    auth: true,
    component: Payment,
  },
  {
    path: `/highest-level`,
    exact: true,
    auth: true,
    component: HighestLevel,
  },
  {
    path: `/update-user`,
    exact: true,
    auth: true,
    component: UpdateUser,
  },
]

export default home
