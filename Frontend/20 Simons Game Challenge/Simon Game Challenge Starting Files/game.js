var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern =[];





$(".btn").click(function (){
    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
});



function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}


function animatePress(currentColour){}