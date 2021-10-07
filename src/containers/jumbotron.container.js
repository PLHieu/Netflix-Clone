import { Jumbotron } from '../components';
import jumboData from '../fixtures/jumbo.json';

function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((movie) => (
        <Jumbotron key={movie.id} direction={movie.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{movie.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{movie.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image alt={movie.alt} src={movie.image} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

export default JumbotronContainer;
