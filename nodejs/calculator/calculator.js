const express = require("express");
const app = express();


app.get("/", (req, res)=>{
    console.log(__dirname);
});


app.listen(3000, ()=>{
    console.log("Server has been started at 3000.");
});