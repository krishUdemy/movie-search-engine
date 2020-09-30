import { LitElement, html, css } from 'lit-element';
import 'fa-icons';

export class SearchBox extends LitElement {
  static get styles() {
    return css`
      div {
        background-color: #ff6200;
      }
    `;
  }

  static get properties() {
    return {
      searchKey: { type: String }
    };
  }

  constructor() {
    super();
    this.searchKey = 'telugu';
  }

  render() {
    return html`
    <div>
      <lion-input label="Enter a search key" id="searchInput">
        <fa-icon class="fas fa-search icon" color="#a83905" size="1em"></fa-icon>
        <span>Search</span>
      </lion-input>
      <button @click="${e => this.getSearchKey(e)}">Search</button>
    </div>
    `;
  }

  getSearchKey() {
    this.searchKey = this.shadowRoot.querySelector("#searchInput").value;
    const event = new CustomEvent('start-search', {
      detail: { searchKey: this.searchKey },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
}

customElements.define('search-box', SearchBox);
