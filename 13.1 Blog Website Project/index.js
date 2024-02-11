import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
// class dict{
//   var number,
//   var
// }
// Define the object constructor function
function Database() {
  this.title_number;
  this.title;
  this.description;
}

// Create an array of objects using the constructor function
let objArray = new Array(10);
for (let i = 0; i < 10; i++) {
  objArray[i] = new Database();
  objArray[i].title_number = -1;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.post("/delete", (req, res) => {
  res.render("delete.ejs", {});
});

app.post("/add", (req, res) => {
  res.render("add.ejs", {});
});

app.post("/home", (req, res) => {
  // const data = {
  //   title_number: req.body["title-number"],
  //   title: req.body["title"],
  //   description: req.body["description"],
  //   to_del: req.body["to_del"],
  // };
  // console.log(req.body);
  if (req.body["to_del"] != undefined) {
    // means the delete function has been called
    var index = req.body["to_del"] - 1;
    objArray[index].title_number = -1;
    objArray[index].title = "";
    objArray[index].description = "";
  } else {
    // means the add function has been called
    var index = req.body["title-number"] - 1;
    objArray[index].title_number = index + 1;
    objArray[index].title = req.body["title"];
    objArray[index].description = req.body["description"];
  }

  res.render("home.ejs", { objArray: objArray });
});

app.post("/login", (req, res) => {
  // res.sendFile(__dirname + "views/login.ejs");

  //check login credentials...
  //if correct then send home.ejs else redirect again
  var name = req.body["username"];
  var pass = req.body["password"];

  if (pass === "pass") res.render("home.ejs", {});
  else
    res.render("login.ejs", {
      advice: 1,
    });
});

app.get("/", (req, res) => {
  res.render("login.ejs", {});
});

app.listen(port, () => {
  console.log(`The server started at port: ${port}`);
});
