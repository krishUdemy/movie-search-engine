import { html, fixture, expect } from '@open-wc/testing';

import '../src/movie-search-engine.js';

describe('MovieSearchEngine', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <movie-search-engine></movie-search-engine>
    `);
  });

  it('renders a h2', () => {
    const h1 = element.shadowRoot.querySelector('h2');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('Movies main container');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
