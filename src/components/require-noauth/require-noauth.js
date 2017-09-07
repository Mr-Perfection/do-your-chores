import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const RequireNoAuthRoute = ({component: Component, authenticated, ...rest}) => (
  <Route
    {...rest}
    render={(props) => {
      return authenticated ? (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location },
        }}/>
      ) : (
        <Component {...props} />
      )
    }}
  />
);


export default RequireNoAuthRoute;
