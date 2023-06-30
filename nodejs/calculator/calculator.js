const express = require('express');
const app = express();


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});


app.post("/", (req, res)=>{
    res.send("Thanks for posting the request.");
});


app.listen(3000, ()=>{
    console.log("Server has been started at 3000.");
});