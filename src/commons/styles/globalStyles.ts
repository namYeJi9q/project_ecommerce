import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    background-color: #fff;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  input {
    border: none;
    outline: none;
    background-color: #e9e9e9;
    color: #a9a9a9;
    font-size: 15px;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;
