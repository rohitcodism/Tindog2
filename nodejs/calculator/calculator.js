import express from "express";
const app = express();


app.get("/", (req, res)=>{
    console.log(req);
    res.send("Hello World");
});


app.listen("3000", ()=>{
    console.log("Server has been started at 3000.")
});