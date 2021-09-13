import Jumbotron from "./components/jumbotron";
import jumboData from "./fixtures/jumbo.json";

function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((movie) => (
        <Jumbotron key={movie.id} direction={movie.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{movie.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{movie.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={movie.image} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

export default App;
