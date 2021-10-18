import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --font: 'Roboto', sans-serif;

    --white: #ffffff;

    --fire: #ff751a;
    --ice: #1a75ff;
    --flying: #33ffff;
    --psychic: #cc33ff;
    --water: #3366ff;
    --ground: #804000;
    --rock: #6b6b47;
    --poison: #b97fc9;
    --grass: #9bcc50;
    --electric: #e6e600;
    --bug: #ff9999;
    --ghost: #403f3f;
    --dark: #000000;
    --dragon: #e60000;
    --fairy: #ffccff;
    --steel: #cccccc;
    --fighting: #c68c53;
    --normal: #e7e6e4;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font);
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--steel);
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`

export default GlobalStyles
