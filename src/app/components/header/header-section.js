import { LitElement, html } from 'lit-element';
import { headerStyles } from './header-section-styles.js';

export class Header extends LitElement {
  static get styles() {
    return headerStyles;
  }

  static get properties() {
    return {
      searchKey: { type: String },
    };
  }

  constructor() {
    super();
    this.searchKey = '';
  }

  // renders the header title, search input and button
  render() {
    return html`
      <header class="header-container">
        <div class="title">Welcome to the movie search engine!</div>
        <div class="search-container">
          <lion-input
            placeholder="Enter a search key"
            class="search-input"
            @change="${this.getSearchKey}"
          ></lion-input>
          <button class="search-btn" @click="${this.getSearchKey}">
            Search
          </button>
        </div>
      </header>
    `;
  }

  // fetches the search input value and dispatches the custom event
  getSearchKey() {
    this.searchKey = this.shadowRoot.querySelector('.search-input').value;
    const event = new CustomEvent('start-search', {
      detail: { searchKey: this.searchKey },
      bubbles: true,
    });
    this.dispatchEvent(event);
  }
}

customElements.define('header-element', Header);
