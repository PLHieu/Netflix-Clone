import { Redirect } from 'react-router-dom';
import { BrowseContainer } from '../containers/browse.container';
import useAuthListener from '../hooks/use-auth-listener';

export default function Browse() {
  const { user } = useAuthListener();

  return user ? <BrowseContainer /> : <Redirect to="/signin" />;
}
