import { Global, css } from "@emotion/react";

const globalStyles = css`
  @import url(https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic);

* {
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
}

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
      font-size: 12px; /* Размер шрифта для параграфов */
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
      font-size: 10px; /* Размер шрифта для параграфов */
    }
}

`;

function GlobalStyles() {
  return <Global styles={globalStyles} />
}

export default GlobalStyles;