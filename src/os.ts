let os=require("os");
let path2=require("path");


// Platform

console.log(os.platform());

// CPU Architecture

console.log(os.arch());

// CPU core info

console.log(os.cpus());

// Free Memory

console.log(os.freemem());

// Total Memory

console.log(os.totalmem());

// Home Directory

console.log(os.homedir());

// Up Time

console.log(os.uptime())