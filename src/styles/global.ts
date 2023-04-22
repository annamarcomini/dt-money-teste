import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
 --background: #202024; // sao variaveis que só funcionam se eu chamar elas
 --text-title: #E1E1E6;
 --text-body: #C4C4CC;
 --red: #E52E4D;
 --black: #121214; //lugar do blue
 --shape-princiapal: #323238;
 --green: #015F43; 
 --light-green: #00875F; //botao do azul claro
}
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;

}
body, input, textarea, button {
  font-family: "Roboto", sans-serif;
  font-weight: 400
}
h1,h2,h3,h4,h5,h6, strong {
  font-weight: 700
}
//font-size: 16px é ideal
html{
 @media (max-width: 1080px) { //definir o limite para certo tipo de tamanho de tela
  font-size: 93.75%; //15px
 }
 @media (max-width: 720px) {
  font-size: 87.5%; //14px
 }
}

body {
 background: var(--background); //cor do background
 -webkit-font-smoothing: antialiased;
}

button{
  cursor: pointer;
}

[disabled] {
 opacity:0.6;
 cursor: not-allowed;
}
`