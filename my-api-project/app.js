const express = require ("express");
const userRoutes = require("./routes/userRoutes.js");
const app = express();

app.use(express.json());
app.use("/api/users", userRoutes)

app.get("/", (req, res) => {
    res.send("Welcome to Georgia's API!");
});

app.get("/aboutme", (req, res) => {
    res.send("My name is Georgia, my favourite fruits are grapes and plums");
});

app.post("/users", (req, res) => {
    const recData = req.body;
    console.log("received JSON data:", recData);
    res.json ({
        message: "JSON data received",
        users: recData
    });
});


app.listen(3000, () => {
    console.log("Server running on localhost:3000")
})
module.exports = app;