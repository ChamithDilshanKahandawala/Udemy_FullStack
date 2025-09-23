import express from 'express';
import bodyparser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({extended: true}));


app.get("/",(req,res)=>{
  res.render("index.ejs");
});

app.post("/submit", (req,res)=>{
  const numLetters = req.body["fName"].length + req.body["lName"].length;

  res.render("index.ejs",{numberofLetters: numLetters});
});


app.listen(port,()=>{
  console.log(`Your server is run on ${port}`);
});