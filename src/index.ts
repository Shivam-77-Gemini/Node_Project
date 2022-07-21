// import express from 'express';
 
// const app = express();
 
// app.get('/', (request, response) => {

//   response.send("Hello");
// });
 
// app.listen(3000);
// var Person=require("./person");
// console.log(Person.name);
// console.log(Person.age);
console.log(__dirname,__filename);
const path=require('path');

//File and directory location
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

//File Extension
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

//Create Path Object
console.log(path.parse(__filename));