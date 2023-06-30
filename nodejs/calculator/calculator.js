import express from "express";
const app = express();


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
    console.log(__dirname);
});


app.listen("3000", ()=>{
    console.log("Server has been started at 3000.")
});