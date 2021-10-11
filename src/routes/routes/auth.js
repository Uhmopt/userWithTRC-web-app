import SignIn from 'pages/signIn'
import Register from 'pages/register'
import ForgotPassword from 'pages/forgotPassword'
import ResetPassword from 'pages/resetPassword'

const routes = [
  // page for auth
  {
    path: `/sign-in`,
    exact: true,
    auth: false,
    component: SignIn,
  },
  {
    path: `/register`,
    exact: true,
    auth: false,
    component: Register,
  },
  {
    path: `/forgot-password`,
    exact: true,
    auth: false,
    component: ForgotPassword,
  },
  {
    path: `/reset-password`,
    exact: true,
    auth: false,
    component: ResetPassword,
  },
]

export default routes
