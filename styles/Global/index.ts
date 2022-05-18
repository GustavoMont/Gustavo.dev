import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --main-purple: #7D3C84;
        --light-purple: #A4629E;
        --pink: #C2467B;
        --secondary-pink: #DA4767;
        --salmon: #E86C6E;
        --light-salmon: #F5EBDF;

    }
    body{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        position: relative;
        font-family: 'Raleway', sans-serif;
        padding-bottom: 2rem;
    }
    a{
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    
`;

export default GlobalStyle;
