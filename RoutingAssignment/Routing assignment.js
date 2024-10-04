const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Hello Tomi!");
});
app.get("/users", (req, res) => {
    res.json({name: "Georgia", age: "23"});
});
app.get("/search", (req, res) => {
    const query = req.query.q;
    res.send(`Search results for: ${query}`);
});


app.use(express.json());

app.post("/users", (req, res) => {
    const user = req.body;
    res.json({message: "User created, user"});
});

app.put("/users/:id", (req, res) => {
    const user_id = req.params.id;
    const updated_data =req.body;
    res.json({message: `User ${user_id} updated`, updated_data});
});

app.delete("/users/:id", (req, res) => {
    const user_id = req.params.id;
    res.json({message: `User ${user_id} deleted`});
});


app.listen(4000, () => {
    console.log("I'm on port 4000");
});