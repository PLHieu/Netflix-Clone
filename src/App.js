import React from 'react';
import { FaqsContainer } from './containers/accordion.container';
import { FooterContainer } from './containers/footer.container';
import JumbotronContainer from './containers/jumbotron.container';

function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default App;
