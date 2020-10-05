import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';

import '@lion/ajax';

import '../src/app/app-root.js';
import '../src/components/header/header-section.js';

describe('<app-root>', () => {
  let el;
  beforeEach(async () => {
    el = await fixture(html`<app-root></app-root>`);
  });

  it('render the header', () => {
    const titleHeading = el.shadowRoot.querySelector('header-element');
    expect(titleHeading).to.exist;
  });

  it('renders the movie-list', () => {
    const movieList = el.shadowRoot.querySelector('movie-list');
    expect(movieList).to.exist;
  });

  it('renders the footer', () => {
    const footer = el.shadowRoot.querySelector('footer-element');
    expect(footer).to.exist;
  });

  it('should render the element with the class named app-wrapper', () => {
    const container = el.shadowRoot.querySelector('.app-wrapper');
    expect(container).to.exist;
  });

  it('should render the element with the class named content', () => {
    const container = el.shadowRoot.querySelector('.content');
    expect(container).to.exist;
  });

  it('check event of search-btn', async () => {
    const btn = el.shadowRoot.querySelector('header-element');
    const spy = sinon.spy();
    el.addEventListener('start-search', spy);
    btn.dispatchEvent(
      new CustomEvent('start-search', {
        detail: { searchKey: 'French' },
        bubbles: true,
      })
    );
    await el.updateComplete;
    expect(spy).to.exist;
  });
});
