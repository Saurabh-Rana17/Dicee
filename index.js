var randomInt1 = Math.random() * 6;
randomInt1 = Math.floor(randomInt1) + 1;
var dicelist = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var randomImg = dicelist[randomInt1];
document.querySelector(".img1").setAttribute("src", "randomImg");
