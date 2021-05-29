var css = document.querySelector("h3");
var body = document.querySelector("body");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var random = document.querySelector("#random");

function changeBackgroundColor(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomColors(){
    color1.value = generateRandomColor();
    color2.value = generateRandomColor();
    changeBackgroundColor();
}

function generateRandomColor(){
   return  '#'+Math.floor(Math.random()*16777215).toString(16);
}

changeBackgroundColor();

random.addEventListener("click", randomColors);

color1.addEventListener("input", changeBackgroundColor);

color2.addEventListener("input", changeBackgroundColor);

