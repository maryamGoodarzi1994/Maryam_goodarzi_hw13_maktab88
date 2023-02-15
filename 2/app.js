const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  res.send("Root Route");
});
app.get("/home", (_req, res) => {
  res.send("Home Route");
});
app.get("/about", (_req, res) => res.send("About Route"));
app.get("/contact", (_req, res) => res.send("Contact Route"));
app.get("*",(_req,res)=> res.send("Not Find"))

app.listen(4000,()=>{
    console.log("express is up!");
})
