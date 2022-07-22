let url=require('url');
let myUrl= new URL("https://www.youtube.com/watch?v=fBNz5xF-Kx4&ab_channel=TraversyMedia");

// Serialized URL
console.log(myUrl.href);

//Host domain
console.log(myUrl.host);
console.log(myUrl.toString());

//Host Name (not having port)
 console.log(myUrl.hostname);

//Path name
 console.log(myUrl.pathname);

 //Syrialized query

 console.log(myUrl.search);

 //Params Object

 console.log(myUrl.searchParams);

 //Add params
 myUrl.searchParams.append('abc','1243');

 console.log(myUrl.searchParams);

 //Loop through params

//  myUrl.searchParams.forEach((value:any,name:any)=>console.log(`name is ${name} and value is ${value}`));