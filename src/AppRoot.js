import { LitElement, html, css } from 'lit-element';

import { AjaxClass } from '@lion/ajax';

import './components/movies/movie-list.js';
import './components/app/search-box.js';

export class AppRoot extends LitElement {
  static get properties() {
    return {
      appName: { type: String },
      movieList: { type: Array }
    };
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        color: #1a2b42;
        margin: 0 auto;
        text-align: center;
      }
    `;
  }

  constructor() {
    super();
    this.appName = 'Movies main container';
    this.movieList = [];
  }

  render() {
    return html`
      <div>
        <h2>Movies main container</h2>
        <header>
          Welcome to the movie search app!
          <search-box @start-search="${e => this.searchMovie(e)}"></search-box>
        </header>
        <movie-list .movieList=${this.movieList}></movie-list>
        <footer-element></footer-element>
      </div>
    `;
  }

  searchMovie(ev) {
    const myAjax = new AjaxClass({ jsonPrefix: ")]}'," });
    myAjax
      .get(`https://www.omdbapi.com/?apikey=a5549d08&s=${ev.detail.searchKey}`)
      .then(response => {
        if (response.data.Response === 'False') {
          this.errorMessage = response.data.Error;
          this.movieList.Search = [];
        } else {
          this.movieList = response.data.Search;
          this.errorMessage = null;
        }
      })
      .catch(error => {
        this.errorMessage = error !== '' ? error : 'Movie not found!';
        this.movieList.Search = [];
      });
  }

}
