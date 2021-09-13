import React from "react";
import { Container, Image, Inner, Item, Pane, SubTitle, Title } from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <div {...restProps}>{children}</div>
  );
}

Jumbotron.Container = function JumbotronContainer({children,...restProps}) {
  return <div {...restProps}>{children}</div>
}

Jumbotron.Pane = function JumbotronPane({children,...restProps}) {
  return <div {...restProps}>{children}</div>
}

Jumbotron.Title = function JumbotronTitle({children,...restProps}) {
  return <h1 {...restProps}>{children}</h1>
}

Jumbotron.Subtitle = function JumbotronSubtitle({children,...restProps}) {
  return <h2 {...restProps}>{children}</h2>
}

Jumbotron.Image = function JumbotronImage({...restProps}) {
  return <img {...restProps} />
}
