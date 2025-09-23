import express from 'express';
import { title } from 'process';
 const app = express();
 const port = 3000;


 app.get("/", (req,res)=>{
    const data ={
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items:["Apple", "Banana", "Orange"],
        htmlContent: "<strong> This is some Text</strong>"
    };
    res.render("index.ejs",data);
 });

 app.listen(port,()=>{
    console.log(`server is running on ${port}`);
 });