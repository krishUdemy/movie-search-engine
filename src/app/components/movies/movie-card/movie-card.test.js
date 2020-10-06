import { html, fixture, expect } from '@open-wc/testing';

import './movie-card.js';
import { movieList } from '../movie-list-mock.js';

describe('<movie-card>', () => {
  let el1;
  let el2;
  beforeEach(async () => {
    el1 = await fixture(
      html`<movie-card .item="${movieList.Search[0]}"></movie-card>`
    );

    el2 = await fixture(
      html`<movie-card .item="${movieList.Search[1]}"></movie-card>`
    );
  });

  it('should render the element with the class name card-container', () => {
    const container = el1.shadowRoot.querySelector('.card-container');
    expect(container).to.exist;
  });

  it('should render the element with the class name card-footer', () => {
    const container = el1.shadowRoot.querySelector('.card-footer');
    expect(container).to.exist;
  });

  it('should render the element with the class name card-details', () => {
    const container = el1.shadowRoot.querySelector('.card-details');
    expect(container).to.exist;
  });

  it('should render a movie image', () => {
    const image = el1.shadowRoot.querySelector('.card-container img').src;
    expect(el1).to.exist;
    expect(image).to.exist;
    expect(image).to.equal(
      'https://m.media-amazon.com/images/M/MV5BOWFlNzZhYmYtYTI5YS00MDQyLWIyNTUtNTRjMWUwNTEzNjA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'
    );
  });

  it('should render default placeholder image for a movie', async () => {
    const image = el2.shadowRoot.querySelector('.card-container img').src;
    await el2.updateComplete;
    expect(el2).to.exist;
    expect(image).to.exist;
    expect(image).to.equal('http://via.placeholder.com/300x403');
  });

  it('movie should have title and year of release', async () => {
    const len = el1.shadowRoot.querySelectorAll('.card-details p').length;
    await el1.updateComplete;
    expect(el1).to.exist;
    expect(len).to.equal(2);
  });

  it('should render movie title', async () => {
    const title = el1.shadowRoot.querySelectorAll('.card-details p')[0];
    await el1.updateComplete;
    expect(el1).to.exist;
    expect(title).to.exist;
    expect(title.textContent).to.equal('Cool Hand Luke');
  });

  it('should render released year', async () => {
    const year = el1.shadowRoot.querySelectorAll('.card-details p')[1];
    await el1.updateComplete;
    expect(el1).to.exist;
    expect(year).to.exist;
    expect(year.textContent).to.equal('1967');
  });
});
