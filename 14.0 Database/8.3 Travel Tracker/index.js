import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "india@11",
  port: 5432,
});

// var data;
// var total = 0;
// db.query("SELECT country_code FROM visited_countries", (err, res) => {
//   if (err) {
//     console.error("There is error :", err.stack);
//   } else {
//     data = res.rows;
//     total = res.rowCount;
//   }
//   db.end();
// });

db.connect();

async function getCountries() {
  var result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((element) => {
    countries.push(element.country_code);
  });
  return countries;
}
// console.log(data);
app.get("/", async (req, res) => {
  // var result = await db.query("SELECT country_code FROM visited_countries");
  // let countries = [];
  // result.rows.forEach((element) => {
  //   countries.push(element.country_code);
  // });
  // total = result.rowCount;

  // console.log(result);
  //Write your code here.
  const countries = await getCountries();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
  });
  // console.log(countries);
  // db.end();
});

app.post("/add", async (req, res) => {
  const country_name = req.body.country;

  // db.connect();
  try {
    var result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [country_name.toLowerCase()]
    );
    if (result.rows[0] !== 0) {
      var country_code = result.rows[0].country_code;
    }

    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [country_code]
      );

      res.redirect("/");
    } catch (error) {
      // console.log(error);
      const countries = await getCountries();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "The Country Name already added :)",
      });
    }
  } catch (error) {
    // console.log(error);
    const countries = await getCountries();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "The Country Name you entered, doesn't exist",
    });
    return;
  }

  // console.log(country_code);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
