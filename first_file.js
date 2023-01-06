console.log('hello world');

console.log(global);

// in node  we dont have to import ,we have to require modules 
const os = require('os')
const path = require('path')
const math = require('./math.js')
// another way of importing functions by destucturing
// const {add,subtract,multiply,divide} = require('./math')


//importing functions from other file
console.log(math.add(2,3));

// gives the os info 
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

// gives the following info 
console.log(__dirname)
console.log(__filename)

// info with the help of path module 
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

// collective data of path module 
console.log(path.parse(__filename));