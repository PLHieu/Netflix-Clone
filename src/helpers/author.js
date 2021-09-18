import React from 'react';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export function IsUserRedirect({ user, children }) {
  if (user) {
    return <Redirect to={ROUTES.HOME} />;
  }
  return children;
}

export function ProtectedRoute({ user, children }) {
  if (user) {
    return children;
  }
  return <Redirect to={ROUTES.SIGN_IN} />;
}
