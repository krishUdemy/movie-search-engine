import { html, fixture, expect } from '@open-wc/testing';

import './movie-list/movie-list.js';
import { movieList } from './movie-list-mock.js';

describe('<movie-list>', () => {
  let el;
  beforeEach(async () => {
    el = await fixture(
      html`<movie-list .listOfMovies="${movieList.Search}"></movie-list>`
    );
  });

  it('should render the element with the class named movie-list-container', () => {
    const container = el.shadowRoot.querySelector('.movie-list-container');
    expect(container).to.exist;
  });

  it('should render the element with the class named movie-list', () => {
    const container = el.shadowRoot.querySelector('.movie-list');
    expect(container).to.exist;
  });

  it('should render list of movies', async () => {
    const len = el.listOfMovies.length;
    await el.updateComplete;
    expect(el).to.exist;
    expect(len).to.equal(10);
  });
});
