const express = require("express");
const server = express();


server.set("view engine", "ejs");
//server.set("view engine", "pug");

server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
    res.render("index.ejs", { title: "Home Page", username: "Georgia" });
    //res.render("index.pug", { title: "Home Page", username: "Georgia" });
});

server.get("/products", (req, res) => {
    const products = [
        { name: "MAC Retro Matte Liquid Lipstick", shades: ["Ruby Phew!", "103 Feels So Grand", "104 Fahion Legacy","Chilli Addict"] },
        { name: "Nyx Shine Loud Lip Colour", shades: ["16 Goal Getter", "17 Rebel in Red", "18 On a Mission", "20 In Charge", "30 Total Baller"] },
        { name: "Catrice Shine Bomb Lip Lacquer", shades: ["040 About Last Night", "050 Feeling Berry Special", "060 Pinky Promise", "070 Hottie"] },
        { name: "Maybelline Superstay Matte Ink Liquid Lipstick", shades: ["20 Pioneer", "70 Amazonian", "75 Fighter", "117 Groundbreaker", "118 Dancer", "320 Individualist", "325 Shot Caller", "340 Exhilarator"] },
        { name: "Maybelline Superstay Vinyl Ink Liquid Lipstick", shades: ["10 Lippy", "20 Coy", "25 Red Hot", "30 Unrivaled", "40 Witty", "45 Capricious", "50 Wicked", "55 Royal"] }
    ];
    res.render("products.ejs", { products });
});

server.post("/select-shade", (req, res) =>{
    const selectedShade = req.body.shade;
    res.send(`${selectedShade} selected`);
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});