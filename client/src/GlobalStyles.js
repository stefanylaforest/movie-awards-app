import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        font-family: "Spartan", sans-serif;
    
    }

    h2, h3, h4, h5, h6 {
        color: #373737;
    }

    h1 {
        text-transform: uppercase;
        font-family: 'Knewave', cursive;
        color: #275EFF;
        text-shadow: -3px 2px 0px black;
    }


    body {
        margin: 0 auto;
        background-color: white;
    }
`;

export default GlobalStyles;
