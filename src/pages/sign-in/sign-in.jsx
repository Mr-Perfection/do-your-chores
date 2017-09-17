import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authActions } from '../../../src/auth';
import { SignInButton } from '../../../src/components/button';

const SignInPage = ({ signInWithFacebook, signInWithGoogle }) => {
  return (
    <div className="container">
      <div className="sign-in">
        <h1 className="heading">Sign in</h1>
        <div className="sign-in-buttons">
          <SignInButton buttonName="Facebook" onClick={signInWithFacebook} />
          <SignInButton buttonName="Google" onClick={signInWithGoogle} />
        </div>
      </div>
    </div>
  );
};

SignInPage.propTypes = {
  signInWithFacebook: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
};


const mapDispatchToProps = {
  signInWithFacebook: authActions.signInWithFacebook,
  signInWithGoogle: authActions.signInWithGoogle,
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(SignInPage)
);