var fs = require('fs');
var os = require('os'); // os library gives information about the current system

var user = os.userInfo();
console.log(user.username); //output: ALI s
// \n to add text in fsMagic.txt file in new Line after every time server start
fs.appendFile('fsMagic.txt',`Hi ${user.username} this is magic of fs Library!! \n` , ()=>{ console.log('New File Created')});

// to check more functionality of fs and os just print this out
// console.log(fs); console.log(os);
// fs.readFile('fsMagic.txt' , 'utf8' , (err,data)=>{
//     if (err)
//     {
//         console.log(` Error is ${err.message}`)
//     }
// })

// importing a js file in current js file
const temp = require('./temp.js') ; 
console.log(`I am ${temp.age} years old. `)

/* lodash library 
Advantages : 
1. Deals efficiently with data
2. lodash is a versatile library that enhances the capabilities of JavaScript and 
simplifies common programming tasks. Its various utility functions, functional 
programming support,and deep object manipulation features make it a valuable tool in Node.js development.
. For example, functions like _.map, _.filter, _.reduce, _.forEach , _.curry, _.partial , _.flow. 
_.get , _.set and _.uniq 
can significantly simplify and improve the readability of your code.
*/ 
const _ = require('lodash')
var arr = ['person' , 1, 1 , 2 , 3, 3, 'person' , 'actor']
var anne = _.uniq(arr);
console.log(anne);
console.log(_.isArray(arr))
console.log(_.isString(arr))
