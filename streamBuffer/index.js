const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on('request',(req,res) =>{
    //creating a readable file stream 

    const rstream = fs.createReadStream("input.txt");

    //end error data finish are the 4 events of stream
/*
    rstream.on("data",(chunkdata) => { //event is fired when there is data availabel to read
        res.write(chunkdata);
    });

    rstream.on("end",()=>{  //event is fired when there is no more data
        res.end(); 
    });
    
    rstream.on("error",(err)=>{ //event is fired when there is a error
        console.log(error);
        res.end("file not found");
    })
*/

//Second way to read data in chunk
    rstream.pipe(res);

});

server.listen(8000,"127.0.0.1");