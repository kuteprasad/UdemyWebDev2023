import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // console.log(req);
  res.send("hello Jimmy");
});

app.get("/contact", (req, res) => {
  res.send("<h1> don't contact me </h1>");
});

app.get("/about", (req, res) => {
  res.send("<h2> <em> How are you doing? </em> </h2>");
});

app.listen(port, () => {
  console.log(`the server has started on port: ${port}`);
});
