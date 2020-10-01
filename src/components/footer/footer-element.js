import { LitElement, html, css } from 'lit-element';

export class FooterElement extends LitElement {

  static get styles() {
    return css`
    .footer-container {
      display: flex;
      height: 100%;
      width: 100%;
      margin: 0;
      align-items: center;
      background-color: #fff;
      height: 50px;
      position: fixed;
      bottom: 0;
      justify-content: center;
    }
    `;
  }

  render() {
    return html`
    <footer class='footer-container'>
      Developed by Krishnaiah Anthati
      <a href="https://github.com/krishUdemy/movie-search-engine" target="_blank">github</a>
    </footer>
    `;
  }
}

customElements.define('footer-element', FooterElement);
