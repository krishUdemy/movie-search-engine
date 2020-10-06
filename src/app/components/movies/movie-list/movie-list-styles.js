import { css } from 'lit-element';

export const movieListStyles = css`
  .movie-list-container {
    width: 90%;
    margin: 0 auto;
  }

  .movie-list {
    width: 100%;
    margin: 0 auto;
    display: inline-block;
    box-sizing: border-box;
  }

  .alt-movie-text {
    position: absolute;
    top: 50%;
    left: 20%;
    color: gray;
    font-weight: bolder;
    font-size: 20px;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .movie-list-container {
      width: 100%;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .movie-list {
      width: 100%;
    }
  }
`;
