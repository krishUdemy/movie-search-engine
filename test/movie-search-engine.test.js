import { html, fixture, expect } from '@open-wc/testing';

import '../src/app/app-root.js';

describe('MovieSearchEngine', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <app-root></app-root>>
    `);
  });

  it('renders a h2', () => {
    const h2 = element.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
    expect(h2.textContent).to.equal('Movies main container');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
