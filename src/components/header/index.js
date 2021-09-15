import { Link as RouterLink } from 'react-router-dom';
import { Background, Logo, Link, Container } from './styles/header';

export default function Header({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ to, children, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

Header.Logo = function HeaderLog({ src, to, ...restProps }) {
  return (
    <RouterLink to={to}>
      <Logo src={src} {...restProps} />;
    </RouterLink>
  );
};
