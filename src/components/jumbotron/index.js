import React from 'react';
import { Container, Image, Inner, Item, Pane, SubTitle, Title } from './styles/jumbotron';

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
  return (
    <Item>
      <Inner direction={direction} {...restProps}>
        {children}
      </Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.Subtitle = function JumbotronSubtitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
