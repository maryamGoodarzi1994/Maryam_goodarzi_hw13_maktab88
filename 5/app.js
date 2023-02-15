const express = require("express");
const app = express();
const path = require("path");

const pagesPath = path.join(__dirname, "./view/");

app.get("/", (req, res) => {
  try {
    const query = req.query.page;
    console.log(pagesPath);
    res.sendFile(`${pagesPath}${query}.html`);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.listen(4400, () => {
  console.log("express is up!");
});
