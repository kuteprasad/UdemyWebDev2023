const fs = require("fs");

// fs.writeFile("message1.txt", "Welcome to Jimmy", (err) => {
//   if (err) throw err;
//   console.log("the file is saved");
// });

fs.readFile("message1.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
