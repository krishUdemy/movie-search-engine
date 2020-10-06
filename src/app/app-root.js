// Core component
import { LitElement, html } from 'lit-element';

// Lion component
import { ajax } from '@lion/ajax';
import { appRootStyles } from './app-root-styles.js';

// Custom components
import './components/movies/movie-list/movie-list.js';
import './components/header/header-section.js';
import './components/footer/footer-element.js';

export class AppRoot extends LitElement {
  static get properties() {
    return {
      movieList: Array,
      error: String,
      _loading: Boolean,
    };
  }

  static get styles() {
    return appRootStyles;
  }

  constructor() {
    super();
    this.movieList = [];
    this.error = null;
  }

  // renders the DOM with loader and list of movies when the data available
  render() {
    return html`<div class="app-wrapper">
      <header-element
        @start-search="${ev => this.searchMovie(ev)}"
      ></header-element>
      ${this._loading
        ? html`<div class="loader">Loading...</div>`
        : html`<h2 class="error">${this.error}</h2>
            <movie-list
              class="content"
              .movieList=${this.movieList}
            ></movie-list>`}
      <footer-element></footer-element>
    </div>`;
  }

  // get the list of movies from the api and catch error if not found
  async searchMovie(ev) {
    this._loading = true;
    const requestConfigUrl = `https://www.omdbapi.com/?apikey=a5549d08&s=${ev.detail.searchKey}`;
    try {
      const { Search = [], Error } = (await ajax.get(requestConfigUrl)).data;
      this.error = Error;
      this.movieList = [...Search];
    } catch (Error) {
      this.error = Error;
    } finally {
      this._loading = false;
    }
  }
}

customElements.define('app-root', AppRoot);
