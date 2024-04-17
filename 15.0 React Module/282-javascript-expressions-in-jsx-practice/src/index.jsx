//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display 2 paragraph HTML elements.
var name = "Krsna";
var year = new Date();
var y = year.getUTCFullYear;
ReactDOM.render(
  <div>
    <h2>Created bby {name}</h2>
    <p>CopyRight @ {year}</p>
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
