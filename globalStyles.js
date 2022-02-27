import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        padding : 0;
        margin: 0;
        box-sizing = border-box;
        background-color: none;
    }

    body {
        font-family: Georgia, serif;
        display: flex;
        padding-top: 42px;
        justify-content: center; 
    }
`;

export default GlobalStyles;