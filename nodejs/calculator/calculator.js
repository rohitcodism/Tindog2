const express = require('express');
const pass =  require('body-parser');
const bodyParser = require('body-parser');
const app = express();


app.use(pass.urlencoded({extended: true}));


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});


app.post("/", (req, res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    
    let result = num1 + num2;
    res.send(result);
});


app.listen(3000, ()=>{
    console.log("Server has been started at 3000.");
});