import React from "react";
import ReactDOM from "react-dom";
import * as pi from "./functions";

ReactDOM.render(
  <ul>
    <li>{pi.pi}</li>
    <li>{pi.doublepi()}</li>
    <li>3</li>
  </ul>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
