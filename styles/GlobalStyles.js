import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* html, */
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row; */
  /* height: 80%;
  width: 70%;    */
    }
    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
