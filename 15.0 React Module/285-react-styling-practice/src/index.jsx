//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";
const customStyle = {
  color: "",
};

var content = "good morning";
let time = new Date().getHours();

if (time > 0 && time <= 12) {
  content = "Good Morning";
  customStyle.color = "red";
} else if (time > 12 && time < 18) {
  content = "Good Afternoon";
  customStyle.color = "green";
} else {
  content = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {" "}
    {content}
  </h1>,
  document.getElementById("root")
);

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
