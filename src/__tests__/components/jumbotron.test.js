import { render } from '@testing-library/react';
import React from 'react';
import JumbotronContainer from '../../containers/jumbotron.container';

describe('<Jumbotron/>', () => {
  it('render the jumbotron with populated data', () => {
    const { container, getByText, getByAltText } = render(<JumbotronContainer />);

    expect(getByText('Enjoy on your TV.')).toBeTruthy();
    expect(getByAltText('Tiger King on Netflix')).toBeTruthy();
    expect(
      getByText('Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.')
    ).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
