import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Background,
  Logo,
  ButtonLink,
  Container,
  Group,
  TextLink,
  Search,
  SearchInput,
  Profile,
  Dropdown,
  SearchIcon,
  Picture,
  Feature,
  FeatureCallOut,
  PlayButton,
  Text,
} from './styles/header';

export default function Header({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ to, children, ...restProps }) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};

Header.Logo = function HeaderLogo({ src, to, ...restProps }) {
  return (
    <RouterLink to={to}>
      <Logo src={src} {...restProps} />;
    </RouterLink>
  );
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.Search = function HeaderSearch({ ...restProps }) {
  const [active, setActive] = useState(false);
  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setActive(!active)}>
        <img src="/images/icons/search.png" alt="search icon" />
      </SearchIcon>
      <SearchInput active={active} />
    </Search>
  );
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ ...restProps }) {
  return <Picture {...restProps} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

// for feature
Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature>{children}</Feature>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
