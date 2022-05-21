import React from 'react';
import ReactDOM from 'react-dom'
import logo from './fashio.gif'
import Css from './styles.css'
import Heads from './heads'
import Navigations from './navigations'
import Sections from './sections'
import Footers from './footers'

ReactDOM.render(
<>
  <html>
  <Heads/>
  <body>
    <Navigations/>
    <Sections/>
    <Footers/>
  </body>
  </html>
</>,
document.getElementById("root")
);