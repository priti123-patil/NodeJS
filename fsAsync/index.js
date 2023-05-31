const fs = require("fs");

//It is asynchronous file handling
//asynchronous will not work without callback function
// so the third parameter is callback function

//callback is used to check whether the operation is completed or any error is there

fs.writeFile("newfile.txt","today is awesome day", (err) => {
    console.log("file is created");
});

fs.appendFile("newfile.txt","this is appended", (err) => {
    console.log("text appended");
});

fs.readFile("newfile.txt","utf-8", (err, data) => {
    console.log(data);
});