//jshint esversion: 6

const express = require('express')
const app = express();
const pass = require('body-parser');
const https = require('https');
const mailchimp = require('@mailchimp/mailchimp_marketing')
const request = require('request');

mailchimp.setConfig({
    apiKey: "70f77890b2802f6c575731c9e7493cde-us21",
    server: "us21"
});

app.use(pass.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res)=>{
    const fName = req.body.firstName;
    const lName = req.body.lastName;
    const mail = req.body.email;
    const listId = "72683f5ee6";
    const subscribingUser = {
    firstName: fName,
    lastName: lName,
    email: mail
};

async function run() {
    const response = await mailchimp.lists.addListMember(listId, {
        email_address: subscribingUser.email,
        status: "subscribed",
        merge_fields: {
            FNAME: subscribingUser.firstName,
            LNAME: subscribingUser.lastName
        }
    });

    console.log(
        `Successfully added contact as an audience member. The contact's id is ${response.id
        }.`
    );
}

run();
//     let data  = {
//         members:[
//             {
//                 email_address: email,
//                 status: "Subscribed",
//                 marge_fields: {
//                     FNAME: firstName,
//                     LNAME: lastName
//                 }
//             }
//         ]
//     };

    
    
//     const jsonData = JSON.stringify(data);
    
//     const url = "https://us21.api.mailchimp.com/3.0/lists/72683f5ee6"
    
//     const options = {
//         method: "POST",
//         auth: "rohitpa1:70f77890b2802f6c575731c9e7493cde-us21"
//     }
//     const request = https.request(url, options, (req, resp)=>{
//         response.on("data", (data)=>{
//             console.log(JSON.parse(data));
//         });
//     });
    
});



app.listen(3000, ()=>{
    console.log("Server is up at port : 3000.");
});

//API Key : 70f77890b2802f6c575731c9e7493cde-us21
//Audience id : 72683f5ee6