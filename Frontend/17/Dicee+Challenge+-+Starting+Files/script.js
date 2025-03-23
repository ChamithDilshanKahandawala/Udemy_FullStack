
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

let leftCube = document.querySelector(".img1");
let rightCube = document.querySelector(".img2");


leftCube.setAttribute("src",`./images/dice${randomNumber1}.png`);
rightCube.setAttribute("src",`./images/dice${randomNumber2}.png`);

let header = document.querySelector("h1");

if(randomNumber1===randomNumber2){
    header.innerText = "Draw";

}if(randomNumber1> randomNumber2){
    header.innerText = "🚩Player 1 Wins";
}else if(randomNumber2>randomNumber1){
    header.innerText = "Player 2 Wins 🚩";
}