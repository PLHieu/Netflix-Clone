import React, { useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import HeaderContainer from '../containers/header.container';
import { Form } from '../components';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';

function SignUp() {
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();
  const isInvalid = firstName === '' || email === '' || password === '';
  const [user] = useState(JSON.parse(localStorage.getItem('authUser')));

  const handleSignup = (event) => {
    event.preventDefault();
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
          })
          .then(() => {
            localStorage.setItem('authUser', JSON.stringify(result.user));
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setFirstName('');
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
        {error && <Form.Error>There some error when signing up</Form.Error>}
        <Form.Title>Sign Up</Form.Title>
        <Form.Base onSubmit={handleSignup} method="POST">
          <Form.Input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <Form.Input placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Form.Input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Form.Submit disabled={isInvalid} type="submit">
            Sign Up
          </Form.Submit>
        </Form.Base>

        <Form.Text>
          Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
        </Form.TextSmall>
      </Form>
    </HeaderContainer>
  );
}

export default SignUp;
