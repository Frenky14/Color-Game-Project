var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var guessingColor = document.getElementById("guessingColor");
var msgDisplay = document.getElementById("msg");
var h1Color = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easybtn");
var hardButton = document.getElementById("hardbtn");

guessingColor.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if (clickedColor === pickedColor) {
			msgDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1Color.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.backgroundColor = "#232323";
			msgDisplay.textContent = "Try Again";
		}
	});
}


resetButton.addEventListener("click", function(){
	msg.textContent = "";
	h1Color.style.backgroundColor = "steelblue";
	this.textContent = "NEW COLORS";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	guessingColor.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
});

hardButton.addEventListener("click", function(){
	numSquares = 6;
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	guessingColor.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";

	}
});

easyButton.addEventListener("click", function(){
	numSquares = 3;
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	guessingColor.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

function changeColors (color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor (){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
			return arr;
}

function randomColor(){
 	var r = Math.floor(Math.random() * 256);
 	var g = Math.floor(Math.random() * 256);
 	var b = Math.floor(Math.random() * 256);
 	return "rgb(" + r + ", " + g + ", " + b + ")";
}