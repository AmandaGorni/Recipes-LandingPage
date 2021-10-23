import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        margin: 1.5rem;
        color: #373737;
        font-family: DM Sans;
        
    }
`;

export default GlobalStyle;