import { LitElement, html } from 'lit-element';
import { movieCardStyles } from './movie-card-styles.js';

export class MovieCard extends LitElement {
  static get styles() {
    return movieCardStyles;
  }

  // renders movie poster, title and year of release
  render() {
    return html`
      <div class="card-container">
        ${this.item.Poster !== 'N/A'
          ? html`<img src="${this.item.Poster}" alt="" />`
          : html`<img src="http://via.placeholder.com/300x403" alt="" />`}
        <div class="card-footer">
          <ul class="card-details">
            <li><p>${this.item.Title}</p></li>
            <li><p>${this.item.Year}</p></li>
          </ul>
        </div>
      </div>
    `;
  }
}

window.customElements.define('movie-card', MovieCard);
