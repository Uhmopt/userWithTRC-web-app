import Settings from 'admin/settings'

const admin = [
  // page for auth
  {
    path: `/back/settings`,
    exact: true,
    auth: true,
    adimn: true,
    component: Settings,
  },
]

export default admin
