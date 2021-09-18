import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignIn, Home, SignUp, Browse, Test } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/author';
import useAuthListener from './hooks/use-auth-listener';

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.SIGN_IN}>
          <IsUserRedirect user={user}>
            <SignIn />
          </IsUserRedirect>
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          <IsUserRedirect user={user}>
            <SignUp />
          </IsUserRedirect>
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTES.BROWSE}>
          <ProtectedRoute user={user}>
            <Browse />
          </ProtectedRoute>
        </Route>
        <Route exact path="/test">
          <ProtectedRoute user={user}>
            <Test />
          </ProtectedRoute>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
