import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "india@11",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  var email = req.body.username;
  var password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (checkResult.rows.length > 0) {
      res.send("Email already Exists");
    } else {
      const result = await db.query(
        "INSERT INTO users (email, password) VALUES ($1, $2);",
        [email, password]
      );
      console.log(result);
      res.render("secrets.ejs");
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  var email = req.body.username;
  var password = req.body.password;
  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    // console.log("check", checkResult.rows);
    if (checkResult.rows.length > 0) {
      var stored_password = checkResult.rows[0].password;
      // console.log(stored_password);
      if (stored_password == password) {
        res.render("secrets.ejs");
      } else {
        res.send("Password doesn't match");
      }
    } else {
      res.send("Email doesn't Exists");
      // res.render("secrets.ejs");
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
