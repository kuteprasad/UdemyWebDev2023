/* 
Section 29: Capstone Project related API
Here, i'm creating a copy of Lorem Generator webpage using, it's API... 
*/

import Express from "express";
import axios from "axios";
import bodyParser from "body-parser";
// import bootstrap from "bootstrap";

const app = Express();
const port = 3000;

// const helper = require("./helper");
app.use(Express.static("public"));
app.use("/", Express.static("./node_modules/bootstrap/dist/"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "this is EJS string!" });
});

app.post("/generate", async (req, res) => {
  //   const data = {
  //     integer: req.body["integer"],
  //     decorate: req.body["decorate"].checked,
  //     short: req.body["short"].checked,
  //   };
  const num = req.body["integer"];
  const deco = req.body["decorate"];
  const short = req.body["short"];
  const bq = req.body["bq"];

  const URL = `https://loripsum.net/api/headers/${num}/${deco}/${short}/${bq}`;
  try {
    const response = await axios.get(URL);
    // console.log("This is actual text:    " + response.data);
    // const result = JSON.stringify(response.data);
    // result = result.replace(/\\n/g, "<br>");

    // console.log(result);
    res.render("index.ejs", {
      content: response.data,
      //   helper: helper,
    });
  } catch (error) {
    res.render("index.ejs", { content: error.message });
  }
});
app.listen(port, () => {
  console.log(`The Server ${port} has Started.`);
});

// console.log(document.getElementById("#myInput"));
