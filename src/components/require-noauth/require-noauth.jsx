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
        <div style={{ height: '100%' }}>
          <div style={{ zIndex: '-3', position: 'fixed', height: '100%', width: '100%', background: 'linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%),no-repeat'}} />
          <Component {...props} />
        </div>
      )
    }}
  />
);


export default RequireNoAuthRoute;
