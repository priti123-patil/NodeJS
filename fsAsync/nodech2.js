const fs = require("fs");

//CRUD OPERATION ON ASYNCHRONOUS FILES

fs.mkdir("thapa2",(err) => {
    console.log("folder created");
})

fs.writeFile("./thapa2/newpriti.txt","this is my content",(err)=>{
    console.log("files created");
});

fs.appendFile("./thapa2/newpriti.txt","Learning nodejs",(err) => {
    console.log("files data appended");
});

fs.readFile("./thapa2/newpriti.txt","utf-8",(err,data) => {
    console.log(data);
});

fs.rename("./thapa2/newpriti.txt","./thapa2/newpatil.txt",(err) => {
    console.log("renamed file");
});

fs.unlink("./thapa2/newpatil.txt", (err) => {
    console.log("file deleted");
})

fs.rmdir("./thapa2", (err) => {
    console.log("removed folder");
});