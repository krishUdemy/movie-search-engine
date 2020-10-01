import { LitElement, html, css } from 'lit-element';

export class Header extends LitElement {
  static get styles() {
    return css`
      .header-container {
        background-color: #ff6200;
        display: flex;
        padding: 20px;
        position: fixed;
        width: 100%;
      }

      .search-container {
        display: flex;
        align-items: center;
        margin-left: 27px;
      }

      .title {
        display: flex;
        align-items: center;
        color: #fff;
      }

      .search-input {
        margin-right: 20px;
      }

      .search-btn {
        font-weight: bold;
        padding: 6px 18px;
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

      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        .search-container ul li {
          float: left;
        }
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
    this.searchKey = '';
  }

  render() {
    return html`  
    <section class="header-container">
      <section class="title">
        Welcome to the movie search engine!
      </section>
      <section class="search-container">
        <lion-input placeholder="Enter a search key" class="search-input" @change="${ev => this.inputChanged(ev)}"></lion-input>
        <button class="search-btn" @click="${ev => this.getSearchKey(ev)}">Search</button>
      </section>
    </section>
    `;
  }

  inputChanged() {
      this.getSearchKey();
  }

  getSearchKey() {
    this.searchKey = this.shadowRoot.querySelector(".search-input").value;
    const event = new CustomEvent('start-search', {
      detail: { searchKey: this.searchKey },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
}

customElements.define('header-element', Header);
