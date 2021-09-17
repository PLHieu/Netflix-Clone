import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignIn, Home, SignUp, Browse, Test } from './pages';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
