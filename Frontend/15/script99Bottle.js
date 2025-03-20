



var numofBottles = 99;
while(numofBottles>= 0){
    var bottleword = "bottle";
    if(numofBottles===1){
        var bottleword = "bottles";
    }
    console.log(numofBottles+" "+bottleword+ " of beer on the wall, "+numofBottles+" "+bottleword+ " of beer");
    numofBottles--;
    console.log("Take one down and pass it arround, "+ numofBottles+" beers on the wall")
}