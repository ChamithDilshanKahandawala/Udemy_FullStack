var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whoIsPaying(names){
    if(names.length===0){
        return "No one is  available to pay the bill"
    }
    else{
        const randomIndex =Math.floor(Math.random()*names.length);
        return `${names[randomIndex]} is going to pay thr bill`;

    }
}

console.log(whoIsPaying(names));