const add = (a,b) => {
    return a+b;
};

const sub = (a,b) => {
    return a-b;
}

const name = "priti"

//It is used to make the add public and now we can access it using require method
//module.exports.add1 = add

module.exports = {add , sub, name};