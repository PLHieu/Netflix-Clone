import { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function Test() {
  const [user] = useState(JSON.parse(localStorage.getItem('authUser')));

  return user ? <div>Browse</div> : <Redirect to="/signin" />;
}
