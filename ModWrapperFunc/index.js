//this is module wrapper function
//because of this the variables in this become private
//It keeps top-level variables (defined with var, const, or let) scoped to the module rather than the global object.
//It helps to provide some global-looking variables that are actually specific to the module, such as:
//The module and exports objects that the implementor can use to export values from the module.
//The convenience variables __filename and __dirname, containing the module's absolute filename and directory path.
( function(exports, require, module, __filename, __dirname){
    const name = "priti";
    console.log(name);
} )
();


