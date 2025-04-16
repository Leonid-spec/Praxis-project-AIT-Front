// src/styles/globalStyles.ts
import { Global, css } from "@emotion/react";

const globalStyles = css`
  @import url(https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap);
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap");

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Lato", sans-serif;
    /* font-family: "Open Sans", sans-serif; */
    /* font-family: "Roboto", sans-serif; */
    /* font-family: "Nunito", sans-serif; */
    /* font-variant: small-caps; */
    background-color: #f6f9fc;
  }

  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  /* Стиль для всех кнопок */
  button {
    font-family: inherit;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  /* Медиазапрос для уменьшения шрифтов и отступов на экранах до 768px */
  @media (max-width: 768px) {
    button {
      font-size: 12px;
      padding: 8px 10px;
    }
  }

  @media (max-width: 868px) {
    body {
      font-size: 12px;
    }
    h1 {
      font-size: 20px;
    }
    h2 {
      font-size: 18px;
    }
    p {
      /* font-size: 12px;  Размер шрифта для параграфов */
    }
  }

  @media (max-width: 668px) {
    body {
      font-size: 10px;
    }
    h1 {
      font-size: 18px;
    }
    h2 {
      font-size: 16px;
    }
    p {
      /* font-size: 10px;  Размер шрифта для параграфов */
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }
`;

function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

export default GlobalStyles;
