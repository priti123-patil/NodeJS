const fs = require("fs");

//CRUD OPERATION ON SYNCHRONOUS FILES

//create new folder
fs.mkdirSync("thapachallenge1");

//create new file
fs.writeFileSync("thapachallenge1/bio.txt","my name is priti");
fs.appendFileSync("thapachallenge1/bio.txt","and appended");

//read file without buffering data
const data = fs.readFileSync("thapachallenge1/bio.txt","utf-8");
console.log(data);

//rename from bio to mybio
fs.renameSync("thapachallenge1/bio.txt","thapachallenge1/mybio.txt");

//delete file and folder
fs.unlinkSync("thapachallenge1/mybio.txt");

//delete directory
fs.rmdirSync("thapachallenge1");