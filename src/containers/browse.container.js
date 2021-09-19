import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export function BrowseContainer() {
  return (
    <Header>
      <Header.Frame>
        <Header.Group>
          <Header.Logo src="../../images/icons/logo.svg" to={ROUTES.HOME} />
          <Header.TextLink to={null}>Series</Header.TextLink>
          <Header.TextLink to={null}>Films</Header.TextLink>
        </Header.Group>
        <Header.Group>
          <Header.Search />
          <Header.Profile>
            <Header.Picture src="../../images/users/1.png" />
            <Header.Dropdown>
              <Header.Group>
                <Header.TextLink to={null}>Phan Long Hieu</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.TextLink to={null}>Sign Out</Header.TextLink>
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
