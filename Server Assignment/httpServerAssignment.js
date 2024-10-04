// Task 1
const http = require("http");

const server = http.createServer((req, res) => {
    //res.writeHead(200, { "Content-Type": "text/plain"});
    //res.end("Hello, Tomi! I am playing around with the server");
    
    //res.writeHead(200, { "Content-Type": "text/html"});
    //res.end("<h1>Hello, Tomi!</h1><p>I am playing around with the http server</p>");
    
    //res.writeHead(200, { "Content-Type": "application/JSON"});
    //res.end(JSON.stringify({message: "Hello again", status: "Success"}));
    
    if (req.url === "/greet") {
        res.write("Hello Tomi! Nice to meet you.");
        res.end
    }
    //} else if (req.url === "/goodbye") {
    //    res.end("Goodbye Tomi! See you later");
    //} else {
    //    res.end("Welcome to my http server")
    //}
});

server.listen(5000, () =>{
    console.log("Server running on port 5000");
});