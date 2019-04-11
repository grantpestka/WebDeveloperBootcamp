var numSquares = 6;
var colors = generatRandomColors(numSquares);
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generatRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = ""
})

easyBtn.addEventListener("click", function(){
	//toggle selected
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	//generate new colors
	colors = generatRandomColors(numSquares);
	//pick new color
	pickedColor = pickColor();
	//update game display
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none"
		}
	}
})

hardBtn.addEventListener("click", function(){
	//toggle selected
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	//generate new colors
	colors = generatRandomColors(numSquares);
	//pick new color
	pickedColor = pickColor();
	//update game display
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		// alert(this.style.backgroundColor);
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			//correct guess
			messageDisplay.textContent = "Correct!!";
			resetButton.textContent = "Play Again"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}else{
			//incorrect guess
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	})
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++ )
	//change each color to match given color
	squares[i].style.backgroundColor = color;
}

function pickColor(){
	//randomly create index value of color to select
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generatRandomColors(num){
	//make array
	var arr = [];
	//add num random colors to array
	//repeat num times
	for(var i = 0; i < num; i++){
		//create random color and push into arr
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a red 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green 0- 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue 0- 255
	var b = Math.floor(Math.random() * 256);
	//create rgb color string
	var rgbColor = "rgb(" + r + ", " + g + ", " +b + ")"; 
 
	return rgbColor;
}