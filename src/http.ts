// import {http} from 'http';
import { createServer, IncomingMessage, ServerResponse } from 'http';
let http=require('http');
http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    res.write("Hello World");
    res.end("hello");
}).listen(5001,()=>console.log("Created"));
// import { createServer, IncomingMessage, ServerResponse } from 'http';
 
// const port = 5000;
 
// const server = createServer((request: IncomingMessage, response: ServerResponse) => {
//     response.write("Hello");
//   response.end('Hello world!');
// });
 
// server.listen(port, () => {
  
//     console.log(`Server listening on port ${port}`);
  
// });