import express from 'express'

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    const today = new Date();
    let day = today.getDay();

    let type = "The Week Day";;
    let adv = "It is time to work Hard";

    if(day ===0 || day ===6){
         type = "The Weekend";
         adv = "It is time to have fun";
    }

    res.render("index.ejs",{
        dayType: type,
        advice: adv,
    });
});

app.listen(port,()=>{
    console.log(`Server Runnig on ${port}`);
});