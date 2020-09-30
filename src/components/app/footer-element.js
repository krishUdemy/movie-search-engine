import { LitElement, html, css } from 'lit-element';


export class FooterElement extends LitElement {

  static get styles() {
    return css`
    p {
      background-color: blue;
    }
    `;
  }

  render() {
    return html`
    <footer>
      <p>
        Developed by Krishna Anthati
        <a href="https://github.com/krishUdemy/movie-search-engine" target="_blank">github</a>
      </p>
    </footer>
    `;
  }

}

customElements.define('footer-element', FooterElement);