const express = require('express');
const https = require('https');
const app = express();


app.get("/", (req, res)=>{
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a6f1888ad9de1b93445f018986948496'
    https.get(url, (resp)=>{
        console.log(resp.statusCode);


        resp.on('data', (data)=>{
            console.log(data);
        });
    });


    res.send("Hello World!!");
});


app.listen(3000, ()=>{
    console.log("Server is running at port : 3000.")
});