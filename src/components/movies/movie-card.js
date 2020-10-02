import { LitElement, html, css } from 'lit-element';

export class MovieCard extends LitElement {
  static get styles() {
    return css`
      .card-container {
        /* border: 1px solid gray; */
        margin: 12px 0px;
        width: 100%;
        display: inline-block;
        /* box-shadow: #808080 2px 2px; */
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
        box-sizing: border-box;
        background-color: #fff;
        border: 1px solid transparent;
      }

      .card-container img {
        width: 100%;
        padding: 6px;
        box-sizing: border-box;
        height: 300px;
      }

      p {
        font-size: 16px;
        padding: 0px 12px;
        color: #ff6200;
      }

      .card-footer ul {
        list-style: none;
        padding-left: 0px;
        float: left;
        width: 100%;
        margin: 0px;
        border-top: 1px solid #0000004d;
      }

      .card-footer ul li:first-child {
        width: 74%;
        margin-right: 6px;
      }

      .card-footer ul li {
        text-decoration: none;
        display: inline-block;
      }

      .card-footer ul li:last-child {
        width: 24%;
        float: right;
        text-align: right;
      }
      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 768px) {
        .card-container {
          width: 45.8%;
          margin: 12px;
        }

        .card-container img {
          height: 330px;
        }
      }

      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        .card-container {
          width: 30.5%;
        }

        .card-container img {
          height: 400px;
        }
      }
    `;
  }

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
