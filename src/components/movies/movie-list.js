// Core modules
import { LitElement, html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';

// Lion component
import '@lion/input/lion-input.js';

// Custom component
import './movie-card.js';

export class MovieList extends LitElement {
  static get styles() {
    return css`
      .main-container {
        width: 100%;
      }

      .movie-list {
        width: 95%;
        margin: 0 auto;
        display: inline-block;
      }

      .alt-movie-text {
        position: absolute;
        top: 50%;
        left: 40%;
        color: gray;
        font-weight: bolder;
        font-size: 20px;
      }

      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        .movie-list {
          width: 100%;
        }
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
        <div class="movie-list">
          ${this.movieList.length === 0
            ? html`<p class='alt-movie-text'>Please enter a search term.</p>`
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
