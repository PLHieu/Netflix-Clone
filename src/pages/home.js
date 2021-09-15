import { FaqsContainer } from '../containers/accordion.container';
import { FooterContainer } from '../containers/footer.container';
import JumbotronContainer from '../containers/jumbotron.container';

function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
