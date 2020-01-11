import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap&subset=latin-ext');
    
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
        /* Dzięki temu 1rem = 10px */
    }

    body {
        font-family: "Montserrat", sans-serif;
        font-size: 1.6rem;
        background-color: #F7F7F7;
        /* Ale nadal bazową wielkością fontu jest 16px */
    }
`;

export default GlobalStyle;
