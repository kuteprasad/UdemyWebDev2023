import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "india@11",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Database functions
async function addTaskDB(newtitle) {
  if (newtitle === null) {
    console.log("Can't insert null value");
  } else {
    await db.query("INSERT INTO items (title) VALUES ($1)", [newtitle]);
  }
}

async function getItemsDB() {
  var a = await db.query("select * from items");
  // console.log(a.rows);
  return a.rows;
}

async function delItemDB(idToDel) {
  await db.query("DELETE FROM items WHERE id = $1;", [idToDel]);
}

async function itemToEditDB(idToEdit, titleToUpdate) {
  await db.query("update items set title = $1 where id=$2;", [
    titleToUpdate,
    idToEdit,
  ]);
}

//Main Code

// let items = [
//   { id: 1, title: "Buy milk" },
//   { id: 2, title: "Finish homework" },
// ];

app.get("/", async (req, res) => {
  res.render("index.ejs", {
    listTitle: "My PermaList",
    listItems: await getItemsDB(),
  });
});

app.post("/add", async (req, res) => {
  const newtitle = req.body.newItem;
  // items.push({ title: item });
  await addTaskDB(newtitle);
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const idToEdit = parseInt(req.body.updatedItemId);
  const titleToUpdate = req.body.updatedItemTitle;
  await itemToEditDB(idToEdit, titleToUpdate);

  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  var idToDel = req.body.deleteItemId;
  idToDel = parseInt(idToDel);
  await delItemDB(idToDel);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
