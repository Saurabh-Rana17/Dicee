
var randomInt1 = Math.random() * 6;
randomInt1 = Math.floor(randomInt1)+1;

var randomInt2 = Math.random() * 6;
randomInt2 = Math.floor(randomInt2)+1;


var randomImg1 = "images/dice" + randomInt1 + ".png";
var randomImg2 = "images/dice" + randomInt2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImg1);

document.querySelector(".img2").setAttribute("src", randomImg2);

if (randomInt1 > randomInt2) {
    document.querySelector("h1").innerHTML = "Player 1 won🚩 "
} else if (randomInt1 < randomInt2) {
    document.querySelector("h1").innerHTML = "Player 2 won🚩 "

} else {
    document.querySelector("h1").innerHTML = "Draw"

}
