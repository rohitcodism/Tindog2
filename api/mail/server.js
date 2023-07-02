//jshint esversion: 6

const express = require('express')
const app = express();
const pass = require('body-parser');
const request = require('request');

app.use(pass.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, ()=>{
    console.log("Server is up at port : 3000.");
});