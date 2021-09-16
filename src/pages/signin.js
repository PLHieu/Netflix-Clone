import React, { useState } from 'react';
import HeaderContainer from '../containers/header.container';
import { Form } from '../components';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || email === '';
  const handleSignin = () => {};

  return (
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
