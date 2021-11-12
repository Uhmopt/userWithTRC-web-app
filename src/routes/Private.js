import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  
  const isAuthenticated = useSelector((state) => Boolean(state?.auth?.isAuth));
  const isAdmin = useSelector((state) => Boolean(state?.auth?.isAdmin));
  return (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated && !isAdmin ? (
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

export default PrivateRoute
