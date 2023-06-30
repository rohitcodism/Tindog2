import { log } from "console";
import express from "express";


const app = express();

//app.get(), function that determines what to do when our server gets a request from a browser
//the callback function tells the server what to do after the request 
app.get("/",(request, response)=>{
    console.log(request);
    response.send("<h1><em>Hello World</em></h1>");
});

// tunes our server at a specified port 3000
app.listen(3000, ()=>{
    console.log("server started on port 3000");
});