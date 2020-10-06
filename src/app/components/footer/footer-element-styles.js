import { css } from 'lit-element';

export const footerStyles = css`
  .footer-container {
    display: flex;
    height: 100%;
    width: 100%;
    margin: 0;
    align-items: center;
    background-color: #fff;
    height: 40px;
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
`;
