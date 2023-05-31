const fs = require("fs");
const bioData = {
    name : "priti",
    age : "18",
    phone : "7972404273",
    mail : "priti@gmail.com"
};
console.log(bioData.mail);

const jsondata = JSON.stringify(bioData); //object to json conversion

//json object - keys and values are in double quotes
//js object - values are in double quotes

console.log(jsondata);


//json to js object
const data = JSON.parse(jsondata);

fs.writeFile("json1.json",jsondata,(err) => {
    console.log("file created!!");
});

fs.readFile("json1.json","utf-8", (err, data) => {
    const orgData = JSON.parse(data);//converting json to object
    console.log(orgData);
});


