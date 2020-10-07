import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';

import './header-section.js';

describe('<header-element>', () => {
  let el;
  beforeEach(async () => {
    el = await fixture(html`<header-element></header-element>>`);
  });

  it('renders the title of the header', () => {
    const headerHeading = el.shadowRoot.querySelector('.title');
    expect(headerHeading).to.exist;
    expect(headerHeading.innerText).to.equal(
      'Welcome to the movie search engine!'
    );
  });

  it('renders the search input in the header', () => {
    const searchInput = el.shadowRoot.querySelector('.search-input');
    expect(searchInput).to.exist;
  });

  it('renders the search button in the header', () => {
    const searchButton = el.shadowRoot.querySelector('.search-btn');
    expect(searchButton).to.exist;
    expect(searchButton.innerText).to.equal('Search');
  });

  it('renders the header tag', () => {
    const header = el.shadowRoot.querySelector('header');
    expect(header).to.exist;
  });

  it('renders the lion-input tag', () => {
    const lionInput = el.shadowRoot.querySelector('lion-input');
    expect(lionInput).to.exist;
  });

  it('should render the element with the class named header-container', () => {
    const container = el.shadowRoot.querySelector('.header-container');
    expect(container).to.exist;
  });

  it('should render the element with the class named search-container', () => {
    const container = el.shadowRoot.querySelector('.search-container');
    expect(container).to.exist;
  });

  it('check event of search-btn', async () => {
    const searchButton = el.shadowRoot.querySelector('.search-btn');
    const spy = sinon.spy();
    el.addEventListener('click', spy);
    searchButton.click();
    await el.updateComplete;
    expect(spy).to.have.been.calledOnce;
  });
});

describe('check event of search-input', () => {
  let el;
  beforeEach(async () => {
    el = await fixture(html`<lion-input></lion-input>`);
  });

});
