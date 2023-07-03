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

app.post("/", (req, res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    var data  = {
        members:[
            {
                email_address: email,
                status: "Subscribed",
                marge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
    
    var jsonData = JSON.stringify(data);

    
});

app.listen(3000, ()=>{
    console.log("Server is up at port : 3000.");
});

//API Key : 70f77890b2802f6c575731c9e7493cde-us21
//Audience id : 72683f5ee6