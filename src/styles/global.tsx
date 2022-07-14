import { createGlobalStyle } from 'styled-components';
import { COLOR } from './color';
import { FONT } from './font';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {
    font-family: ${FONT.FAMAILY};
    font-size: 62.5%;
    font-weight: ${FONT.WEIGHT.REGULAR};
    line-height: 1.285;
    color: ${COLOR.BLACK};
  }
  body {
    font-size: ${FONT.SIZE.DEFAULT};
    line-height: 1.285;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input, select, textarea, button {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    outline: none;
    font: inherit;
    color: inherit;
    background: none;
    box-sizing: border-box;
    box-shadow: none;
    appearance: none;
  }
  input::placeholder,
  textarea::placeholder {
    color: ${COLOR.GRAY[500]};
  }
  a {
    text-decoration: none;
    font: inherit;
    color: inherit;
  }
  button {
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
  }
  img,
  svg {
    display: block;
    max-width: 100%;
    border: 0;
  }
  
  .hidden {
    overflow: hidden;
    display: inline-block;
    position: relative;
    z-index: -1;
    border: 0;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
  }
`;

export default GlobalStyle;
