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
console.log(path.basename(__filename));
console.log(path.basename(__dirname));