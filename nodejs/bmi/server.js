const express = require('express');
const app = express();
const pass = require('body-parser');


app.use(pass.urlencoded({extended: true}));


app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});


app.post('/', (req, res)=>{
    let weight = req.body.weight;
    let height = req.body.height;

    let bmi = (weight/(height*height));
    res.send("Your BMI is : " + bmi);
});


app.listen(3000, ()=>{
    console.log("Server is running at port : 3000")
});