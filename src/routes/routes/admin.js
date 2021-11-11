import Settings from 'admin/settings'
import Users from 'admin/users'
import UserRevenue from 'admin/userRevenue'
import UserUpgrade from 'admin/userUpgrade'

const admin = [
  // page for auth
  {
    path: `/back/settings`,
    exact: true,
    auth: true,
    adimn: true,
    component: Settings,
  },
  {
    path: `/back/users`,
    exact: true,
    auth: true,
    adimn: true,
    component: Users,
  },
  {
    path: `/back/user-revenue`,
    exact: true,
    auth: true,
    adimn: true,
    component: UserRevenue,
  },
  {
    path: `/back/user-upgrade`,
    exact: true,
    auth: true,
    adimn: true,
    component: UserUpgrade,
  },
]

export default admin
