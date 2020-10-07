import { html, fixture, expect } from '@open-wc/testing';

import './movie-list.js';
import { movieList } from '../movie-list-mock.js';

describe('<movie-list>', () => {
  let el;
  beforeEach(async () => {
    el = await fixture(
      html`<movie-list .listOfMovies="${movieList}"></movie-list>`
    );
  });

  it('should render the element with the class named movie-list-container', () => {
    const listContainer = el.shadowRoot.querySelector('.movie-list-container');
    expect(listContainer).to.exist;
  });

  it('should render the element with the class named movie-list', () => {
    const list = el.shadowRoot.querySelector('.movie-list');
    expect(list).to.exist;
  });
});
