const fs = require("fs");
fs.writeFile("message.txt", "Hello From Nodejs!" ,(err) => {
    if(err) throw err;
    console.log("The file has been saved");
});