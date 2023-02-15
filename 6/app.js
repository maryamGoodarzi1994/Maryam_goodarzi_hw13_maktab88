const express = require("express")
const app = express()
const path = require("path")

const page1Path = path.join(__dirname,"./view/page_1.html")
const page2Path = path.join(__dirname,"./view/page_2.html")
const page3Path = path.join(__dirname,"./view/page_3.html")
const page4Path = path.join(__dirname,"./view/page_4.html")
const page5Path = path.join(__dirname,"./view/page_5.html")
const pagesPath = path.join(__dirname, "./view/");


app.get("/",(_req,res)=>{
    
res.sendFile(page1Path)
})
app.get("/page_2",(_req,res)=>{
res.sendFile(page2Path)
})
app.get("/page_3",(_req,res)=>{
res.sendFile(page3Path)
})
app.get("/page_4",(_req,res)=>{
res.sendFile(page4Path)
})
app.get("/page_5",(_req,res)=>{
res.sendFile(page5Path)
})

app.listen(4100,()=>{
    console.log("express is up!");
})