import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    @import url('bootstrap/dist/css/bootstrap.min.css');
    
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        /* Dzięki temu 1rem = 10px */
    }

    body {
        font-family: "Montserrat", sans-serif;
        font-size: 1.6rem;
        /* Ale nadal bazową wielkością fontu jest 16px */
    }
`;

export default GlobalStyle;
