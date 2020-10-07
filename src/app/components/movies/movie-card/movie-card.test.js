import { html, fixture, expect } from '@open-wc/testing';

import './movie-card.js';
import { movieList } from '../movie-list-mock.js';

describe('<movie-card>', () => {
  let el;
  beforeEach(async () => {
    el = await fixture(html`<movie-card .item="${movieList[0]}"></movie-card>`);
  });

  it('should render the element with the class name card-container', () => {
    const cardContainer = el.shadowRoot.querySelector('.card-container');
    expect(cardContainer).to.exist;
  });

  it('should render the element with the class name card-footer', () => {
    const cardFooter = el.shadowRoot.querySelector('.card-footer');
    expect(cardFooter).to.exist;
  });

  it('should render the element with the class name card-details', () => {
    const cardDetails = el.shadowRoot.querySelector('.card-details');
    expect(cardDetails).to.exist;
  });

  it('should render a movie image', () => {
    const image = el.shadowRoot.querySelector('.card-container img').src;
    expect(image).to.exist;
    expect(image).to.equal(
      'https://m.media-amazon.com/images/M/MV5BOWFlNzZhYmYtYTI5YS00MDQyLWIyNTUtNTRjMWUwNTEzNjA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'
    );
  });

  it('should render a placeholder image for a movie that has no poster ', async () => {
    movieList[0].Poster = 'N/A';
    el = await fixture(html`<movie-card .item="${movieList[0]}"></movie-card>`);
    const image = el.shadowRoot.querySelector('.card-container img').src;
    await el.updateComplete;
    expect(image).to.equal('http://via.placeholder.com/300x403');
  });

  it('movie should have title and year of release', async () => {
    const len = el.shadowRoot.querySelectorAll('.card-details p').length;
    await el.updateComplete;
    expect(len).to.equal(2);
  });

  it('should render movie title', async () => {
    const title = el.shadowRoot.querySelectorAll('.card-details p')[0];
    await el.updateComplete;
    expect(title).to.exist;
  });

  it('should render released year', async () => {
    const year = el.shadowRoot.querySelectorAll('.card-details p')[1];
    await el.updateComplete;
    expect(year).to.exist;
  });
});
