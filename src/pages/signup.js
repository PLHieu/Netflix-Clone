import React, { useContext, useState } from 'react';
import HeaderContainer from '../containers/header.container';
import { Form } from '../components';
import { FirebaseContext } from '../context/firebase';

function SignUp() {
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || email === '' || password === '';

  const handleSignup = (event) => {
    event.preventDefault();
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user.updateProfile({
          displayName: firstName,
        })
      )
      .catch((error) => {
        setFirstName('');
        setEmail('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
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
