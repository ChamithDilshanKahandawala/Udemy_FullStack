var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

//Image1
var randomDiseImage = "dice"+randomNumber1+".png";
var randomImageSrc = "./images/"+randomDiseImage ;

//Image2
var randomDiseImage2 = "dice"+randomNumber2+".png";
var randomImageSrc2 = "./images/"+randomDiseImage2 ;


let img2=document.querySelector("img")[1];
let img1 = document.querySelector("img")[0];

img1.setAttribute("src", randomDiseImage);
img2.setAttribute("src",randomDiseImage2);
