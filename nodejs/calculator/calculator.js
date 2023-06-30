const express = require('express');
const pass =  require('body-parser');
const bodyParser = require('body-parser');
const app = express();


app.use(pass.urlencoded({extended: true}));


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});


app.post("/", (req, res)=>{
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let operation = req.body.operation;
    let result;
    switch(operation){
        case '+':
            result = num1 + num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        default:
            result = "Error no operation entered !!"    
    }
    res.send("The result is : " + result);
});


app.listen(3000, ()=>{
    console.log("Server has been started at 3000.");
});