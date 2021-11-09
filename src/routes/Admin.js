import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'

const AdminRoute = ({ component: Component, ...rest }) => {
  
  const isAuthenticated = useSelector((state) => Boolean(state?.auth?.isAuth));
  const isAdministrator = useSelector((state) => Boolean(state?.auth?.isAdmin));
  return (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated && isAdministrator ? (
        <>
          <Component {...props} />
        </>
      ) : (
        <Redirect
          to={{
            pathname: '/sign-in',
            state: { from: props.location },
          }}
        />
      )
    }
  />
)}

export default AdminRoute
