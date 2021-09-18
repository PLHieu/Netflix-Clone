import { Redirect } from 'react-router-dom';
import useAuthListener from '../hooks/use-auth-listener';

export default function Browse() {
  const { user } = useAuthListener();

  return user ? <div>Browse</div> : <Redirect to="/signin" />;
}
