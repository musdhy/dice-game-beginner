let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let sourceRandomNumber1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",sourceRandomNumber1);

// Activation of the second dice


let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let sourceRandomNumber2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", sourceRandomNumber2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 player1 wins"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 player2 wins"
}else {
    document.querySelector("h1").innerHTML = "Boring Draw!!!!"
};

document.querySelector("button").addEventListener("click", function () {
    location.reload();
});










