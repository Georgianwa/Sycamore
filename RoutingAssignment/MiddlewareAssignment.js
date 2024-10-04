const express = require("express");
const app = express();


const logger= (req, res, next => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});
app.use(logger);


app.use((req, res, next) => {
    console.log("This is a functional middleware");
    next();
});
app.use(express.json());


const authentication = (req, res, next) => {
    if (req.headers.authorization === "Georgia1234!") {
        next();
    } else {
        res.status(403).send("You do not have permission to access this");
    }
};
app.get("/dashboard", authentication, (req,res) => {
    res.send("You have been granted access");
});

app.use(authentication);

