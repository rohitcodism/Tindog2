//jshint esversion: 6

const express = require('express')
const app = express();
const pass = require('body-parser');
const https = require('https');
const mailchimp = require('@mailchimp/mailchimp_marketing')
const request = require('request');

mailchimp.setConfig({
    apiKey: "b12c717272d2d2abf4a3d5255f645257-us21",
    server: "us21"
});

app.use(pass.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    let data  = {
        members:[
            {
                email_address: email,
                status: "subscribed",
                marge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    
    
    const jsonData = JSON.stringify(data);
    
    const url = "https://us21.api.mailchimp.com/3.0/lists/72683f5ee6"
    
    const options = {
        method: "POST",
        auth: "paul1:b12c717272d2d2abf4a3d5255f645257-us21"
    }
    const request = https.request(url, options, (resp)=>{
        resp.on("data", (data)=>{
            console.log(JSON.parse(data));
        });
    });
    
    request.write(jsonData);
    request.end();
});

app.listen(3000, ()=>{
    console.log("Server is up at port : 3000.");
});

//API Key : 70f77890b2802f6c575731c9e7493cde-us21
//Audience id : 72683f5ee6