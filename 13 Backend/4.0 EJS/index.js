import express from "express";
// import bodyparser from "body-parser";

const app = express();
const port = 3000;
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
/*
var d = new Date();
var week = weekday[d.getDay()];

var doThis = "have fun!";
if (week != "Sunday") {
  doThis = "Work Hard!";
}

app.get("/", (req, res) => {
  res.send(`<h1> Hey, it's ${week}, it's time to ${doThis} </h1>`);
}); */

app.get("/", (req, res) => {
  var d = new Date();
  let weekNo = d.getDay();

  var wkday = weekday[weekNo];
  var adv = "hard work";

  if (weekNo == 0 || weekNo == 6) {
    adv = "fun";
  }

  res.render("index.ejs", {
    weekday: wkday,
    advice: "fun",
  });
});

app.listen(port, () => {
  console.log(`The server is active on port: ${port}`);
});
