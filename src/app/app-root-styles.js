import { css } from 'lit-element';

export const appRootStyles = css`
  .app-wrapper {
    width: 100%;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .content {
    display: block;
    padding: 0px 0 60px;
  }

  .error {
    font-size: 16px;
    padding-left: 10px;
    color: rgb(133, 100, 4);
    padding-top: 103px;
  }

  .loader {
    padding: 110px 10px;
    color: rgb(133, 100, 4);
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .error {
      padding-top: 88px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .error {
      padding-top: 72px;
    }
  }
`;
