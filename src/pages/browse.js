import { BrowseContainer } from '../containers/browse.container';
import useContent from '../hooks/use-content';
import selectionFilter from '../utils/selection-filter';

export default function Browse({ user }) {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFilter({ series, films });

  return <BrowseContainer user={user} slides={slides} />;
}
