var randomInt1 = Math.random() * 6;
randomInt1 = Math.floor(randomInt1);

var randomInt2 = Math.random() * 6;
randomInt2 = Math.floor(randomInt2);

var dicelist = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var randomImg1 = dicelist[randomInt1];
document.querySelector(".img1").setAttribute("src", "randomImg1");

var randomImg2 = dicelist[randomInt2];
document.querySelector(".img2").setAttribute("src", "randomImg2");

if (randomInt1 > randomInt2) {
    document.querySelector("h1").innerHTML = "Player 1 won🚩 "
} else if (randomInt1 < randomInt2) {
    document.querySelector("h1").innerHTML = "Player 2 won🚩 "

} else {
    document.querySelector("h1").innerHTML = "Draw"

}
alert("connected");