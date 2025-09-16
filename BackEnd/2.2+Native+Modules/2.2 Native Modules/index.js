const fs = require("fs");

fs.writeFile("message.txt", "hello world", (err)=>{
    if (err) throw err;
    console.log("The file has been saved");
})

fs.readFile("./message.txt", (err, data)=>{
    if (err) throw err;
    console.log(data);
})