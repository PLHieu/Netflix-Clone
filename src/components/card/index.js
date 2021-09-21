import React, { useContext, useState } from 'react';
import { CardFeatureContext } from '../../context/cardFeature';
import { SourcePlayerContext } from '../../context/player';

import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Meta,
  Entities,
  Item,
  Image,
  Feature,
  Content,
  FeatureText,
  FeatureTitle,
  FeatureClose,
  Maturity,
} from './styles/card';

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  const [srcPlayer, setSrcPlayer] = useState('');
  return (
    <SourcePlayerContext.Provider value={{ srcPlayer, setSrcPlayer }}>
      <CardFeatureContext.Provider value={{ itemFeature, showFeature, setShowFeature, setItemFeature }}>
        <Container {...restProps}>{children}</Container>
      </CardFeatureContext.Provider>
    </SourcePlayerContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setItemFeature, setShowFeature } = useContext(CardFeatureContext);
  const { setSrcPlayer } = useContext(SourcePlayerContext);
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
        setSrcPlayer('/videos/bunny.mp4');
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Card.Feature = function CardFeature({ category, children, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(CardFeatureContext);
  return showFeature ? (
    <Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};
