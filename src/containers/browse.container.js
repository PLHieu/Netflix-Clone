import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export function BrowseContainer({ user }) {
  const [category, setCategory] = useState('series');

  function signOut() {
    const auth = getAuth();
    auth.signOut();
  }

  return (
    <Header>
      <Header.Frame>
        <Header.Group>
          <Header.Logo src="../../images/icons/logo.svg" to={ROUTES.HOME} />
          <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>
            Series
          </Header.TextLink>
          <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>
            Films
          </Header.TextLink>
        </Header.Group>
        <Header.Group>
          <Header.Search />
          <Header.Profile>
            <Header.Picture src="../../images/users/1.png" />
            <Header.Dropdown>
              <Header.Group>
                <Header.TextLink>{user.displayName}</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.TextLink onClick={() => signOut()}>Sign Out</Header.TextLink>
              </Header.Group>
            </Header.Dropdown>
          </Header.Profile>
        </Header.Group>
      </Header.Frame>

      <Header.Feature>
        <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
        <Header.Text>
          Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
          City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
          futile attempt to feel like he's part of the world around him.
        </Header.Text>
        <Header.PlayButton>Play</Header.PlayButton>
      </Header.Feature>
    </Header>
  );
}
