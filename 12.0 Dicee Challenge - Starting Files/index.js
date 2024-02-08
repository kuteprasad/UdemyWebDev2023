var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber1);

// alert("working");

// document.querySelector("h1").innerHTML = "hello";

var imgName1 = "./images/dice" + randomNumber1 + ".png";
var imgName2 = "./images/dice" + randomNumber2 + ".png";

var selectImg1 = document.querySelectorAll("img")[0];
var selectImg2 = document.querySelectorAll("img")[1];

selectImg1.setAttribute("src", imgName1);
selectImg2.setAttribute("src", imgName2);

var diff = randomNumber1 - randomNumber2;

if (diff > 0) {
  document.querySelector("h1").textContent = "😀Player 1 Wins";
} else if (diff < 0) {
  document.querySelector("h1").textContent = "😁Player 2 Wins";
} else {
  document.querySelector("h1").textContent = "😕Match draw";
}
