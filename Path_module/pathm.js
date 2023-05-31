const path = require("path");

//The node:path module provides utilities for working with file and directory paths.

//return folder name
console.log(path.dirname("D:/Learning_Node/Path_module/pathm.js"));
//return extension of file
console.log(path.extname("D:/Learning_Node/Path_module/pathm.js"));
//return file name
console.log(path.basename("D:/Learning_Node/Path_module/pathm.js"));

console.log(path.parse("D:/Learning_Node/Path_module/pathm.js"));