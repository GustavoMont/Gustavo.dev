import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    
`;

export default GlobalStyle;
