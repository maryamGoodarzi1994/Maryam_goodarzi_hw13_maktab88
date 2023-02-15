const express = require("express")
const app = express()
const path = require("path")

const homePagePath = path.join(__dirname,"./view/index.html");
const picturePath = path.join(__dirname,"./images/image.jpeg")

app.get("/home",(_req,res)=>{
    res.sendFile(homePagePath)
})
app.get("/picture",(_req,res)=>{
    res.sendFile(picturePath)
})
app.listen(4200,()=>{
    console.log("express is up!");
})