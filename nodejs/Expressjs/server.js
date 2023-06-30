import { log } from "console";
import express from "express";


const app = express();

//app.get(), function that determines what to do when our server gets a request from a browser
//the callback function tells the server what to do after the request 
app.get("/",(request, response)=>{
    console.log(request);
    response.send("<h1><em>Hello World</em></h1>");
});


// code for the contact route to recieve request and send responses in the contact route
app.get("/contact", (req, res)=>{
    res.send("Contact me on Linkedin.")
});

//code for the about route
app.get("/about", (req, res)=>{
    res.send("Hi I'm Rohit Paul, an aspiring Data Scientist.")
});

//code for the shop route
app.get("/shop", (req, res)=>{
    res.send("Here You can do your shopping");
});


// tunes our server at a specified port 3000
app.listen(3000, ()=>{
    console.log("server started on port 3000");
});