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
            const humidity = weatherData.main.humidity;
            const feel = weatherData.main.feels_like;
            const temp = weatherData.main.temp;
            const descrip = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon
            const imageURL = "https://openweathermap.org/img/wn" + icon + "@2x.png";
            console.log("The temperature in the location is : " + temp + " C")
            console.log("The description is : " + weatherData.weather[0].description);
            res.write("<p>The temperature at Habra is : " + temp + "</p>");
            res.write("<br>The description is  : " + descrip);
            res.write("<br>It feels like : " + feel);
            res.write("<br>Humdity : " + humidity);
            res.write("<br> <img src=" + imageURL + ">")
            res.send();
        });
    });
});


app.listen(3000, ()=>{
    console.log("Server is running at port : 3000.")
});