const http = require('node:http');
const fs = require("fs");

//creating server
const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.end("Hello this home page!!");
    }
    else if(req.url == "/about"){
        res.end("This is about us page");
    }
    else if(req.url == "/userapi"){
        res.write("hello from user api ");
        //res.writeHead(200,{"content-type":"application/json"});
        fs.readFile("./userApi/userApi.json","utf-8",(err,data)=> {
           res.end(data); 
        });
    }
    else {
        res.writeHead(404, {"content-type" : "text/html"});
        res.end("<h1>404 Error Page doesnt exist</h1>");
    }
    //res.end("Hello from priti");//sending response
});

server.listen(8000,"127.0.0.1", () => {
    console.log("listening to port 8000");
});

