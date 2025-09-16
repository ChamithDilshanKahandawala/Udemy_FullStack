import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res)=>{
   res.send("<h1>HI hi hiiii</h1>")
    // res.send("Hello world");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact</h1>")
});

app.get("/about", (req,res)=>{
    res.send("<h1>About Me</h1>");
});

app.listen(port,()=>{
    console.log(`server has started on port ${port}`);
});