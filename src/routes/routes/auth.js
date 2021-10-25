import SignIn from 'pages/signIn'
import Register from 'pages/register'
import ForgotPassword from 'pages/forgotPassword'
import ResetPassword from 'pages/resetPassword'
import UpdateUser from 'pages/updateUser'
import Verification from 'pages/verification'

const auth = [
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
  {
    path: `/update-user`,
    exact: true,
    auth: false,
    component: UpdateUser,
  },
  {
    path: `/verification`,
    exact: true,
    auth: false,
    component: Verification,
  },
]

export default auth
