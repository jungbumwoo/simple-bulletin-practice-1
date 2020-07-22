import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => res.send("hello world"));


function handleListen() {
    console.log("Listen on 3000 port");
}

app.listen(PORT, handleListen);