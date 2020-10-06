// Core modules
import { LitElement, html } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';

// Lion component
import '@lion/input/lion-input';

// Custom component
import { movieListStyles } from './movie-list-styles.js';
import '../movie-card/movie-card.js';

export class MovieList extends LitElement {
  static get styles() {
    return movieListStyles;
  }

  static get properties() {
    return {
      movieList: Array,
    };
  }

  constructor() {
    super();
    this.movieList = [];
  }

  // renders movie list to the DOM
  render() {
    return html`
      <div class="movie-list-container">
        <div class="movie-list">
          ${repeat(
            this.movieList,
            item => item.imdbID,
            item => html`<movie-card .item=${item}></movie-card>`
          )}
        </div>
      </div>
    `;
  }
}

window.customElements.define('movie-list', MovieList);
