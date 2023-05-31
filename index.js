var a = "priti";
console.log(a);
const fs = require("fs");
//creates new file
fs.writeFileSync("priti.txt","hey it's me");
//read data in binary form
const buf_data = fs.readFileSync("priti.txt");
console.log(buf_data);
//converting it to string
const org_data = buf_data.toString();
console.log(org_data);
//append content to file
fs.appendFileSync("priti.txt","Yess we can appends!!");
//rename the file
fs.renameSync("priti.txt","newpriti.txt");