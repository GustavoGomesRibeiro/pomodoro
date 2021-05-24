import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0px;
  padding: 0px;
  outline: 0;
  box-sizing: border-box; 
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  background: #1e212d;
  color: #fff;
}

html, body, #root{
    height: 100%;
}
`;
