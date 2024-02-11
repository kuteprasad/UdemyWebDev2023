import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs");
});

app.post("/submit", (req, res) => {
  res.render(__dirname + "/views/index.ejs", {
    data: req.body["fName"].length,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
