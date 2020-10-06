// Core component
import { LitElement, html, css } from 'lit-element';

// Lion component
import { AjaxClass } from '@lion/ajax';

// Custom components
import '../components/movies/movie-list.js';
import '../components/header/header-section.js';
import '../components/footer/footer-element.js';

export class AppRoot extends LitElement {
  static get properties() {
    return {
      movieList: { type: Array },
    };
  }

  static get styles() {
    return css`
      header {
        font-size: 24px;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        padding: 12px;
        color: white;
        border: 1px solid #ff6200;
        display: inline-block;
      }

      .header {
        display: inline-block;
        background: #ff6200;
        position: fixed;
        width: 100%;
      }

      .app-wrapper {
        width: 100%;
        box-sizing: border-box;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }

      .content {
        display: block;
        padding: 85px 0 60px;
      }
    `;
  }

  constructor() {
    super();
    this.movieList = [];
  }

  render() {
    return html`
      <div class="app-wrapper">
        <header-element
          @start-search="${ev => this.searchMovie(ev)}"
        ></header-element>
        <movie-list class="content" .movieList=${this.movieList}></movie-list>
        <footer-element></footer-element>
      </div>
    `;
  }

  searchMovie(ev) {
    const myAjax = new AjaxClass({ jsonPrefix: ")]}'," });

    myAjax
      .get(`https://www.omdbapi.com/?apikey=a5549d08&s=${ev.detail.searchKey}`)
      .then(({ data: { Search = [], Error } }) => {
        this.errorMessage = Error;
        this.movieList = [...Search];
      })
      .catch((error = 'Movie not found!') => {
        this.errorMessage = error;
        this.movieList.Search = [];
      });
  }
}

customElements.define('app-root', AppRoot);
