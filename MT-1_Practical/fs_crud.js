const fs = require('fs');

fs.writeFileSync("demo.txt", "Hello Node.js!");
console.log("File Created");

let data = fs.readFileSync("demo.txt", "utf8");
console.log("File Content:", data);

fs.appendFileSync("demo.txt", "\nWelcome to JavaScript!");
console.log("File Updated");

data = fs.readFileSync("demo.txt", "utf8");
console.log("Updated Content:", data);

fs.unlinkSync("demo.txt");
console.log("File Deleted");
