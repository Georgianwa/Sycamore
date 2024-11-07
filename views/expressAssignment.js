const express = require("express");
const server = express();


server.set("view engine", "ejs");
//server.set("view engine", "pug");

server.get("/", (req, res) => {
    res.render("index.ejs", { title: "Home Page", username: "Georgia" });
    //res.render("index.pug", { title: "Home Page", username: "Georgia" });
});

server.get("/users", (req, res) => {
    const users = [
        {name: "Georgia", age: 23},
        {name: "Eddie", age: 24},
        {name: "Kofo", age: 22},
        {name: "Abia", age: 24}
    ];
    res.render("users", { users });
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});