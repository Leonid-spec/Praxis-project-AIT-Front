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
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    flex: 1;
  }
// Yuliia
  @media (max-width: 868px) {
    body {
      font-size: 14px; /* Общий размер текста для тела */
    }
    h1 {
      font-size: 20px; /* Размер шрифта для заголовков */
    }
    h2 {
      font-size: 18px;
    }
    p {
      //font-size: 12px; /* Размер шрифта для параграфов */
    }
  }
  @media (max-width: 668px) {
    body {
      font-size: 12px; /* Общий размер текста для тела */
    }
    h1 {
      font-size: 18px; /* Размер шрифта для заголовков */
    }
    h2 {
      font-size: 16px; /* Размер шрифта для подзаголовков */
    }
    p {
      //font-size: 10px; /* Размер шрифта для параграфов */
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

  // Yullia was right
  button {
    font-family: "Lato", sans-serif;
    background-color: #7a2141;
    color: white;
    border: none;
    border-radius: 4px; 
    cursor: pointer;
    transition: background-color 0.3s ease;

    @media (min-width: 1980px) {
      padding: 14px 32px !important;
    }

    @media (min-width: 1440px) {
      padding: 14px 28px !important;
    }

    @media (max-width: 1200px) {
      padding: 12px 24px !important;
    }

    @media (max-width: 768px) {
      padding: 10px 20px !important;
    }

    @media (max-width: 480px) {
      font-size: clamp(0.8rem, 2vw, 1.2rem) !important;
      padding: 8px 16px !important; 
    }

    @media (max-width: 360px) {
      font-size: clamp(0.6rem, 2vw, 1rem) !important;
      padding: 6px 12px !important; 
    }

    @media (max-width: 320px) {
      font-size: clamp(0.5rem, 2vw, 0.8rem) !important;
    }

    @media (max-width: 280px) {
      font-size: clamp(0.4rem, 2vw, 0.6rem)!important;
    }
  }
`;

function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

export default GlobalStyles;
