const express = require('express');
const app = express();
// const pass = require('body-parser');


app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});


app.listen(3000, ()=>{
    console.log("Server is running at port : 3000")
});