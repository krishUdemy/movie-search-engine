// Core modules
import { LitElement, html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';

// Lion components
import '@lion/input/lion-input.js';

// Custom components
import './movie-card.js';

export class MovieList extends LitElement {
  static get styles() {
    return css`
      .main-container {
        width: 100%;
        background-color: #fff;
      }

      .movies-list {
        width: 95%;
        margin: 0 auto;
        display: inline-block;
      }

    `;
  }

  static get properties() {
    return {
      movieList: { type: Array },
      errorMessage: { type: String },
    };
  }

  constructor() {
    super();
    this.movieList = [];
    this.errorMessage = null;
  }

  render() {
    return html`
      <div class="main-container">
        <div class="movies-list">
          ${this.movieList.length === 0
            ? html`<p>Please enter a search key.</p>`
            : html`${repeat(
                this.movieList,
                item => item.imdbID,
                item => html`<movie-card .item=${item}></movie-card>`
              )}`}
        </div>
      </div>
    `;
  }
}

window.customElements.define('movie-list', MovieList);
