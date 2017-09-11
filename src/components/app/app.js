import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RequireNoAuthRoute from '../../components/require-noauth';
import SignInPage from '../../pages/sign-in';
import ChoresPage from '../../pages/chores';


const App = ({authenticated, signOut}) => (
  <div>
    <main>
      <RequireNoAuthRoute authenticated={authenticated} path="/" component={ChoresPage} />
      <RequireNoAuthRoute authenticated={authenticated} path="/sign-in" component={SignInPage} />
    </main>
  </div>
);

export default App;
