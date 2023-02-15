const express = require("express");
const app = express();
// app.use(express.json())

app.get("/",(_req,res) => {
  res.send("Hello World")
});

const port = process.env.PORT || 5000;

app.listen(port,()=>{
  console.log(`app is listening on port ${port}...`)
})

