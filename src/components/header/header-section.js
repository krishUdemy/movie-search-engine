import { LitElement, html, css } from 'lit-element';

export class Header extends LitElement {
  static get styles() {
    return css`
      .header-container {
        background-color: #00ff6a;
        padding: 14px;
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 999;
      }

      .search-container {
        display: flex;
        align-items: center;
      }

      .title {
        color: #fff;
        margin-bottom: 12px;
      }

      .search-input {
        margin-right: 20px;
        padding: 6px 6px;
      }

      .search-input input[type='text'] {
        border-radius: 5px;
        padding: 6px;
        border-width: 1px;
      }

      .search-btn {
        font-weight: bold;
        padding: 8px 18px;
        color: #ff6200;
        background-color: #fff;
        border: 1px solid #fff;
        border-radius: 6px;
        margin-right: 25px;
      }

      .search-btn:hover {
        background-color: #fff;
        color: #fff;
        background-color: transparent;
        cursor: pointer;
      }

      .search-btn:focus {
        outline: none !important;
      }

      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        .search-container ul li {
          float: left;
        }
        .header-container {
          background-color: #ff6200;
          display: flex;
          width: 100%;
          box-sizing: border-box;
        }

        .title {
          margin-top: 12px;
          display: flex;
          align-items: center;
        }

        .search-container {
          margin-left: 27px;
        }
      }
    `;
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

  render() {
    return html`
      <header class="header-container">
        <div class="title">Welcome to the movie search engine!</div>
        <div class="search-container">
          <lion-input
            placeholder="Enter a search key"
            class="search-input"
            @change="${ev => this.inputChanged(ev)}"
          ></lion-input>
          <button class="search-btn" @click="${ev => this.getSearchKey(ev)}">
            Search
          </button>
        </div>
      </header>
    `;
  }

  inputChanged() {
    this.getSearchKey();
  }

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
