import React, { useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import HeaderContainer from '../containers/header.container';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user] = useState(JSON.parse(localStorage.getItem('authUser')));

  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const isInvalid = password === '' || email === '';

  const handleSignin = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        localStorage.setItem('authUser', JSON.stringify(result.user));
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail('');
        setPassword('');
        setError(error.message);
        console.log(error);
      });
  };

  return user ? (
    <Redirect to="/" />
  ) : (
    <HeaderContainer>
      <Form>
        {error && <Form.Error>There some error when signing in</Form.Error>}
        <Form.Title>Sign in</Form.Title>
        <Form.Base onSubmit={handleSignin} method="POST">
          <Form.Input placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Form.Input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Form.Submit disabled={isInvalid} type="submit">
            Sign in
          </Form.Submit>
        </Form.Base>
        <Form.Text>
          New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
        </Form.TextSmall>
      </Form>
    </HeaderContainer>
  );
}

export default SignIn;
