import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RequireAuthRoute from '../../components/require-auth';
import RequireNoAuthRoute from '../../components/require-noauth';
import { authActions, getAuth } from '../../../src/auth';
import SignInPage from '../../pages/sign-in';
import DashboardPage from '../../pages/dashboard';
import ChoresPage from '../../pages/chores';


const App = ({ authenticated, signOut }) => (
  <div>
    <main>
      <RequireAuthRoute authenticated={authenticated} exact path="/" component={DashboardPage} />
      <RequireAuthRoute authenticated={authenticated} exact path="/chores" component={ChoresPage} />
      <RequireNoAuthRoute authenticated={authenticated} path="/sign-in" component={SignInPage} />
    </main>
  </div>
);

// Connect component with redux
const mapStateToProps = getAuth;

const mapDispatchToProps = {
  signOut: authActions.signOut,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App));

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
};

