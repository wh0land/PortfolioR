// 전역스타일링

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap; 
    white-space: nowrap;
}
a {
    text-decoration-line: none;
    text-decoration: none;
    color:#181818;
}
ul {
    list-style: none;
}
img {
    display: flex;
    align-items: center;
    height: 200px;
}
`

export default GlobalStyle;