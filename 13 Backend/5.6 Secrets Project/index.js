// HINTS:
// 1. Import express and axios
import Express from "express";
import axios from "axios";
import bodyParser from "body-parser";

// 2. Create an express app and set the port number.
const app = Express();
const port = 3000;

// 3. Use the public folder for static files.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Express.static("public"));

const URL = "https://secrets-api.appbrewery.com/random";

// 4. When the user goes to the home page it should render the index.ejs file.
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(URL);

    // console.log(response);

    res.render("index.ejs", {
      secret: response.data.secret,
      user: response.data.username,
    });
  } catch (error) {
    console.log(error.message);
    res.render("index.ejs", { error: error.message });
  }
});

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
  console.log(`The server is started: ${port}`);
});
