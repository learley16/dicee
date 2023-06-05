
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var file1 = "images/dice" + randomNum1 + ".png";
var image1 = document.querySelectorAll("img")[0];
//var image1 = $("img")[0];

image1.setAttribute("src", file1);


var randomNum2 = Math.floor(Math.random() * 6) + 1;
var file2 = "images/dice" + randomNum2 + ".png";
var image2 = document.querySelectorAll("img")[1];
//var image2 = $("img")[1];

image2.setAttribute("src", file2);


if (randomNum1 > randomNum2) {
    //$("h1").innerHTML = "Player 1 Wins!";
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNum1 < randomNum2) {
    //$("h1").innerHTML = "Player 2 Wins!";
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    //$("h1").innerHTML = "It's a draw!";
    document.querySelector("h1").innerHTML = "It's a draw!";
}