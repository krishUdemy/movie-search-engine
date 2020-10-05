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
        background: rgb(255, 98, 0);
        color: rgb(255, 255, 255);
        width: 100%;
        box-sizing: border-box;
      }

      .git-link {
        color: #ff6200;
        margin-left: 12px;
        border: 1px solid white;
        background: white;
        border-radius: 6px;
        padding: 3px 10px;
        text-decoration: none;
      }

      /* .git-link a:active,
      .git-link a:hover,
      .git-link a:focus {
        color: #ff6200;
        text-decoration: none;
      } */
    `;
  }

  render() {
    return html`
      <footer class="footer-container">
        Developed by Krishnaiah Anthati
        <a
          class="git-link"
          href="https://github.com/krishUdemy/movie-search-engine"
          target="_blank"
          >github</a
        >
      </footer>
    `;
  }
}

customElements.define('footer-element', FooterElement);