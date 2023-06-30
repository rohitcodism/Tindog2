const express = require('express');
const pass =  require('body-parser');
const bodyParser = require('body-parser');
const app = express();


app.use(pass.urlencoded({extended: true}));


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});


app.post("/", (req, res)=>{
    console.log(req.body);
    res.send("Thanks for posting the request.");
});


app.listen(3000, ()=>{
    console.log("Server has been started at 3000.");
});