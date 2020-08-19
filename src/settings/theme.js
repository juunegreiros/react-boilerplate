import { createGlobalStyle } from 'styled-components';

const EstiloBase = createGlobalStyle`
  :root {
    --blue: #118ab2;
    --darkerBlue: #003249;
    --darkBlue: #007ea7;
    --green: #06d6a0;
    --grey: #ccdbdc;
    --lightBlue: #80ced7;
    --pink: #ef476f;
    --red: #e63946;
    --white: #f1faee;
    --yellow: #ffd166;

    --primary: var(--darkBlue);
    --secondary: var(--lightBlue);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: inherit;
  }
`;

export default EstiloBase;
