let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomDiceNumber = "dice" + randomNumber1+".png";
let randomImageSource = "images/"+randomDiceNumber;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

let randomNumber2 = Math.floor(Math.random()*6) +1;
let randomDiceImage2 ="dice"+ randomNumber2+".png";
let randomImageSource2 = "images/" +randomDiceImage2;

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);
if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="Player1 Wins"
} else{
document.querySelector("h1").innerHTML ="Player2 Wins"
}
if (randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Match Tied!"
}
