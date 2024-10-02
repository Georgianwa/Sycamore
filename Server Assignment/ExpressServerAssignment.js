// Task 2
const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.send("Hello, Tomi! Welcome to the Home page");
});

app.get("/About", (req, res) =>{
    res.send("This is a basic Express.js server");
});

app.listen(3000, () => {
    console.log("Express server running on port 3000");
});


//  Task 3
// express.js allowed me to do more with fewer lines of code than the node.js HTTP module
// the code of the express.js server was also more straightforward and easy to understand
