import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        border-radius: 0;
        background: var(--color5);
/* background: linear-gradient(0deg, rgba(255,255,255,1) 3%, rgba(255,255,63,1) 31%, rgba(255,208,0,1) 84%, rgba(235,192,3,1) 99%);
background-repeat: no-repeat;
background-attachment: fixed;
height: 100vh; */
    }
    * {
        box-sizing: border-box;
    }

//Global Colors (oriented on background-video)
:root {
    --color1: #ffdd00; // Light Yellow
    --color2: #ffea00; // Very Light Yellow
    --color3: #ffff3f; // Lightest Yellow
    --color4: #ffd000; // Orange Yellow
    --color5: #ffefc6; // Mustard Yellow
    --color6: #ff7b00; // Orange
    --color7: #80B918; // Light Green
    --color8: #3a5a40; // Dark Green
}

    @font-face {
        font-family: "ComforterBrush";
        src: url("/fonts/ComforterBrush-Regular.ttf") format("truetype");
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: "AnotherTypewriter";
        src: url("/fonts/atwriter.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;

    }
`;

export default GlobalStyles;
