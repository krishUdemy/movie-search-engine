import { LitElement, html, css } from 'lit-element';

export class MovieSearchEngine extends LitElement {
  static get properties() {
    return {
      appName: { type: String },
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
  }

  render() {
    return html`
      <main>
        <h2>${ this.appName }</h2>
      </main>
    `;
  }
}
