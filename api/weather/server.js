const express = require('express');
const https = require('https');
const app = express();


app.get("/", (req, res)=>{
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Habra&units=metric&appid=a6f1888ad9de1b93445f018986948496'
    https.get(url, (resp)=>{
        console.log(resp.statusCode);


        resp.on('data', (data)=>{
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            console.log("The temperature in the location is : " + temp + " C")
            console.log("The description is : " + weatherData.weather[0].description);
        });
    });


    res.send("Hello World!!");
});


app.listen(3000, ()=>{
    console.log("Server is running at port : 3000.")
});